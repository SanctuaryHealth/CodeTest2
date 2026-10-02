import { z } from "zod";
import { audioResolutionKbpsValues, videoResolutionSettings } from "../constants/mediaResolution.js";
import { videoOrientationValues } from "../constants/videoOrientation.js";
export const versionedFile = z.object({ localPath: z.string(), version: z.string() });
export const subtitleStream = z.looseObject({ codec_type: z.literal("subtitle") });
export const subtitleFile = z.looseObject({ streams: z.array(subtitleStream).length(1) });
export const imageStreamLenient = z.looseObject({ codec_type: z.literal("video"), duration_ts: z.union([z.literal("N/A"), z.literal(1)]) });
export const imageFileLenient = z.looseObject({ streams: z.array(imageStreamLenient).length(1) });
export const imageStreamStrict = (resolutionBounds) => {
    if (resolutionBounds && (resolutionBounds.maxHeight < resolutionBounds.minHeight || resolutionBounds.maxWidth < resolutionBounds.minWidth)) {
        throw new Error("Invalid resolution bounds");
    }
    return z.intersection(imageStreamLenient, z.object({
        width: z
            .number()
            .min(resolutionBounds?.minWidth || 1000)
            .max(resolutionBounds?.maxWidth || 5000),
        height: z
            .number()
            .min(resolutionBounds?.minHeight || 1000)
            .max(resolutionBounds?.maxHeight || 5000)
    }));
};
export const imageFileStrict = (resolutionBounds) => z.looseObject({ streams: z.array(imageStreamStrict(resolutionBounds)).length(1) });
export const audioStreamLenient = z.looseObject({ codec_type: z.literal("audio"), duration: z.coerce.number().min(1) });
export const audioFileLenient = z.looseObject({ streams: z.array(audioStreamLenient).length(1) });
export const audioStreamStrict = z.intersection(audioStreamLenient, z.looseObject({
    channel_layout: z.literal("stereo"),
    duration: z.coerce
        .number()
        .min(60)
        .max(60 * 60),
    bit_rate: z
        .number()
        .min(audioResolutionKbpsValues["192kbps"] * 1000)
        .max(audioResolutionKbpsValues["192kbps"] * 1000 * 2)
}));
export const audioFileStrict = z.looseObject({ streams: z.array(audioStreamStrict).length(1) });
export const videoStreamLenient = z.looseObject({
    codec_type: z.literal("video"),
    duration: z.coerce.number().min(1),
    avg_frame_rate: z.custom((value) => (typeof value === "string" ? /^\d+\/\d+$/.test(value) : false))
});
export const videoFileLenient = z.looseObject({
    streams: z.union([z.tuple([videoStreamLenient]), z.tuple([videoStreamLenient, audioStreamLenient]), z.tuple([audioStreamLenient, videoStreamLenient])])
});
export const videoStreamStrict = (orientation) => z.intersection(videoStreamLenient, z.object({
    width: z.literal(videoResolutionSettings["4k"][orientation === "landscape" ? "largeDimension" : "smallDimension"]),
    height: z.literal(videoResolutionSettings["4k"][orientation === "landscape" ? "smallDimension" : "largeDimension"]),
    duration: z.coerce
        .number()
        .min(1)
        .max(60 * 60),
    bit_rate: z
        .number()
        .min(videoResolutionSettings["4k"].videoBitrateKbps * 1000 * 2.5)
        .max(videoResolutionSettings["4k"].videoBitrateKbps * 1000 * 15),
    avg_frame_rate: z.union([z.literal("30/1"), z.literal("25/1"), z.literal("24/1")])
}));
export const videoFileStrict = (orientation) => z.object({
    streams: z.union([
        z.tuple([videoStreamStrict(orientation)]),
        z.tuple([videoStreamStrict(orientation), audioStreamStrict]),
        z.tuple([audioStreamStrict, videoStreamStrict(orientation)])
    ])
});
export const probeProcessingRequest = z.object({
    path: z.string()
});
export const probeProcessingResponse = z.union([subtitleFile, imageFileLenient, audioFileLenient, videoFileLenient]);
export const videoProcessingRequest = z.object({
    sample: z.boolean(),
    videoConfig: z
        .array(z.object({
        videoPath: z.string(),
        imageOverlayPath: z.string().optional(),
        subtitleOverlayPath: z.string().optional(),
        audioOverlayPath: z.string().optional()
    }))
        .nonempty(),
    orientation: z.enum(videoOrientationValues)
});
export const probedVideoProcessingConfigValidation = z
    .array(z.object({
    videoPath_probed: videoFileLenient,
    imageOverlayPath_probed: imageFileLenient.optional(),
    subtitleOverlayPath_probed: subtitleFile.optional(),
    audioOverlayPath_probed: audioFileLenient.optional()
}))
    .nonempty();
export const videoProcessingResponse = z.object({ message: z.union([z.literal("Already processing"), z.literal("Already exists"), z.literal("Queued")]) });
export const audioProcessingRequest = z.object({
    sample: z.boolean(),
    audioConfig: z
        .array(z.object({
        audioPath: z.string()
    }))
        .nonempty()
});
export const probedAudioProcessingConfigValidation = z
    .array(z.object({
    audioPath_probed: z
        .object({
        streams: z.array(audioStreamLenient).length(1)
    })
        .optional()
}))
    .nonempty();
export const audioProcessingResponse = z.object({ message: z.union([z.literal("Already processing"), z.literal("Already exists"), z.literal("Queued")]) });
export const bulkProcessConfigStateProcessingRequest = z.array(z.union([videoProcessingRequest, audioProcessingRequest]));
export const bulkProcessConfigStateProcessingResponse = z.array(z.intersection(z.union([
    z.object({
        request: videoProcessingRequest,
        processConfigState: z
            .array(z.object({
            videoPath: versionedFile,
            imageOverlayPath: versionedFile.optional(),
            subtitleOverlayPath: versionedFile.optional(),
            audioOverlayPath: versionedFile.optional()
        }))
            .nonempty()
    }),
    z.object({
        request: audioProcessingRequest,
        processConfigState: z
            .array(z.object({
            audioPath: versionedFile
        }))
            .nonempty()
    })
]), z.object({ processConfigHash: z.string(), processConfigStateHash: z.string(), fileName: z.string() })));
