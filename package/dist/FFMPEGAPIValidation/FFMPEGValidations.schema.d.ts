import { z } from "zod";
import { VideoOrientation } from "../constants/videoOrientation.js";
export declare const versionedFile: z.ZodObject<{
    localPath: z.ZodString;
    version: z.ZodString;
}, z.core.$strip>;
export type VersionedFile = z.infer<typeof versionedFile>;
export declare const subtitleStream: z.ZodObject<{
    codec_type: z.ZodLiteral<"subtitle">;
}, z.core.$loose>;
export declare const subtitleFile: z.ZodObject<{
    streams: z.ZodArray<z.ZodObject<{
        codec_type: z.ZodLiteral<"subtitle">;
    }, z.core.$loose>>;
}, z.core.$loose>;
export declare const imageStreamLenient: z.ZodObject<{
    codec_type: z.ZodLiteral<"video">;
    duration_ts: z.ZodUnion<readonly [z.ZodLiteral<"N/A">, z.ZodLiteral<1>]>;
}, z.core.$loose>;
export declare const imageFileLenient: z.ZodObject<{
    streams: z.ZodArray<z.ZodObject<{
        codec_type: z.ZodLiteral<"video">;
        duration_ts: z.ZodUnion<readonly [z.ZodLiteral<"N/A">, z.ZodLiteral<1>]>;
    }, z.core.$loose>>;
}, z.core.$loose>;
type ResolutionBounds = {
    minHeight: number;
    minWidth: number;
    maxHeight: number;
    maxWidth: number;
};
export declare const imageStreamStrict: (resolutionBounds?: ResolutionBounds) => z.ZodIntersection<z.ZodObject<{
    codec_type: z.ZodLiteral<"video">;
    duration_ts: z.ZodUnion<readonly [z.ZodLiteral<"N/A">, z.ZodLiteral<1>]>;
}, z.core.$loose>, z.ZodObject<{
    width: z.ZodNumber;
    height: z.ZodNumber;
}, z.core.$strip>>;
export declare const imageFileStrict: (resolutionBounds?: ResolutionBounds) => z.ZodObject<{
    streams: z.ZodArray<z.ZodIntersection<z.ZodObject<{
        codec_type: z.ZodLiteral<"video">;
        duration_ts: z.ZodUnion<readonly [z.ZodLiteral<"N/A">, z.ZodLiteral<1>]>;
    }, z.core.$loose>, z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, z.core.$strip>>>;
}, z.core.$loose>;
export declare const audioStreamLenient: z.ZodObject<{
    codec_type: z.ZodLiteral<"audio">;
    duration: z.ZodCoercedNumber<unknown>;
}, z.core.$loose>;
export declare const audioFileLenient: z.ZodObject<{
    streams: z.ZodArray<z.ZodObject<{
        codec_type: z.ZodLiteral<"audio">;
        duration: z.ZodCoercedNumber<unknown>;
    }, z.core.$loose>>;
}, z.core.$loose>;
export declare const audioStreamStrict: z.ZodIntersection<z.ZodObject<{
    codec_type: z.ZodLiteral<"audio">;
    duration: z.ZodCoercedNumber<unknown>;
}, z.core.$loose>, z.ZodObject<{
    channel_layout: z.ZodLiteral<"stereo">;
    duration: z.ZodCoercedNumber<unknown>;
    bit_rate: z.ZodNumber;
}, z.core.$loose>>;
export declare const audioFileStrict: z.ZodObject<{
    streams: z.ZodArray<z.ZodIntersection<z.ZodObject<{
        codec_type: z.ZodLiteral<"audio">;
        duration: z.ZodCoercedNumber<unknown>;
    }, z.core.$loose>, z.ZodObject<{
        channel_layout: z.ZodLiteral<"stereo">;
        duration: z.ZodCoercedNumber<unknown>;
        bit_rate: z.ZodNumber;
    }, z.core.$loose>>>;
}, z.core.$loose>;
export declare const videoStreamLenient: z.ZodObject<{
    codec_type: z.ZodLiteral<"video">;
    duration: z.ZodCoercedNumber<unknown>;
    avg_frame_rate: z.ZodCustom<`${number}/${number}`, `${number}/${number}`>;
}, z.core.$loose>;
export declare const videoFileLenient: z.ZodObject<{
    streams: z.ZodUnion<readonly [z.ZodTuple<[z.ZodObject<{
        codec_type: z.ZodLiteral<"video">;
        duration: z.ZodCoercedNumber<unknown>;
        avg_frame_rate: z.ZodCustom<`${number}/${number}`, `${number}/${number}`>;
    }, z.core.$loose>], null>, z.ZodTuple<[z.ZodObject<{
        codec_type: z.ZodLiteral<"video">;
        duration: z.ZodCoercedNumber<unknown>;
        avg_frame_rate: z.ZodCustom<`${number}/${number}`, `${number}/${number}`>;
    }, z.core.$loose>, z.ZodObject<{
        codec_type: z.ZodLiteral<"audio">;
        duration: z.ZodCoercedNumber<unknown>;
    }, z.core.$loose>], null>, z.ZodTuple<[z.ZodObject<{
        codec_type: z.ZodLiteral<"audio">;
        duration: z.ZodCoercedNumber<unknown>;
    }, z.core.$loose>, z.ZodObject<{
        codec_type: z.ZodLiteral<"video">;
        duration: z.ZodCoercedNumber<unknown>;
        avg_frame_rate: z.ZodCustom<`${number}/${number}`, `${number}/${number}`>;
    }, z.core.$loose>], null>]>;
}, z.core.$loose>;
export declare const videoStreamStrict: (orientation: VideoOrientation) => z.ZodIntersection<z.ZodObject<{
    codec_type: z.ZodLiteral<"video">;
    duration: z.ZodCoercedNumber<unknown>;
    avg_frame_rate: z.ZodCustom<`${number}/${number}`, `${number}/${number}`>;
}, z.core.$loose>, z.ZodObject<{
    width: z.ZodLiteral<3840 | 2160>;
    height: z.ZodLiteral<3840 | 2160>;
    duration: z.ZodCoercedNumber<unknown>;
    bit_rate: z.ZodNumber;
    avg_frame_rate: z.ZodUnion<readonly [z.ZodLiteral<"30/1">, z.ZodLiteral<"25/1">, z.ZodLiteral<"24/1">]>;
}, z.core.$strip>>;
export declare const videoFileStrict: (orientation: VideoOrientation) => z.ZodObject<{
    streams: z.ZodUnion<readonly [z.ZodTuple<[z.ZodIntersection<z.ZodObject<{
        codec_type: z.ZodLiteral<"video">;
        duration: z.ZodCoercedNumber<unknown>;
        avg_frame_rate: z.ZodCustom<`${number}/${number}`, `${number}/${number}`>;
    }, z.core.$loose>, z.ZodObject<{
        width: z.ZodLiteral<3840 | 2160>;
        height: z.ZodLiteral<3840 | 2160>;
        duration: z.ZodCoercedNumber<unknown>;
        bit_rate: z.ZodNumber;
        avg_frame_rate: z.ZodUnion<readonly [z.ZodLiteral<"30/1">, z.ZodLiteral<"25/1">, z.ZodLiteral<"24/1">]>;
    }, z.core.$strip>>], null>, z.ZodTuple<[z.ZodIntersection<z.ZodObject<{
        codec_type: z.ZodLiteral<"video">;
        duration: z.ZodCoercedNumber<unknown>;
        avg_frame_rate: z.ZodCustom<`${number}/${number}`, `${number}/${number}`>;
    }, z.core.$loose>, z.ZodObject<{
        width: z.ZodLiteral<3840 | 2160>;
        height: z.ZodLiteral<3840 | 2160>;
        duration: z.ZodCoercedNumber<unknown>;
        bit_rate: z.ZodNumber;
        avg_frame_rate: z.ZodUnion<readonly [z.ZodLiteral<"30/1">, z.ZodLiteral<"25/1">, z.ZodLiteral<"24/1">]>;
    }, z.core.$strip>>, z.ZodIntersection<z.ZodObject<{
        codec_type: z.ZodLiteral<"audio">;
        duration: z.ZodCoercedNumber<unknown>;
    }, z.core.$loose>, z.ZodObject<{
        channel_layout: z.ZodLiteral<"stereo">;
        duration: z.ZodCoercedNumber<unknown>;
        bit_rate: z.ZodNumber;
    }, z.core.$loose>>], null>, z.ZodTuple<[z.ZodIntersection<z.ZodObject<{
        codec_type: z.ZodLiteral<"audio">;
        duration: z.ZodCoercedNumber<unknown>;
    }, z.core.$loose>, z.ZodObject<{
        channel_layout: z.ZodLiteral<"stereo">;
        duration: z.ZodCoercedNumber<unknown>;
        bit_rate: z.ZodNumber;
    }, z.core.$loose>>, z.ZodIntersection<z.ZodObject<{
        codec_type: z.ZodLiteral<"video">;
        duration: z.ZodCoercedNumber<unknown>;
        avg_frame_rate: z.ZodCustom<`${number}/${number}`, `${number}/${number}`>;
    }, z.core.$loose>, z.ZodObject<{
        width: z.ZodLiteral<3840 | 2160>;
        height: z.ZodLiteral<3840 | 2160>;
        duration: z.ZodCoercedNumber<unknown>;
        bit_rate: z.ZodNumber;
        avg_frame_rate: z.ZodUnion<readonly [z.ZodLiteral<"30/1">, z.ZodLiteral<"25/1">, z.ZodLiteral<"24/1">]>;
    }, z.core.$strip>>], null>]>;
}, z.core.$strip>;
export declare const probeProcessingRequest: z.ZodObject<{
    path: z.ZodString;
}, z.core.$strip>;
export type ProbeProcessingRequest = z.infer<typeof probeProcessingRequest>;
export declare const probeProcessingResponse: z.ZodUnion<readonly [z.ZodObject<{
    streams: z.ZodArray<z.ZodObject<{
        codec_type: z.ZodLiteral<"subtitle">;
    }, z.core.$loose>>;
}, z.core.$loose>, z.ZodObject<{
    streams: z.ZodArray<z.ZodObject<{
        codec_type: z.ZodLiteral<"video">;
        duration_ts: z.ZodUnion<readonly [z.ZodLiteral<"N/A">, z.ZodLiteral<1>]>;
    }, z.core.$loose>>;
}, z.core.$loose>, z.ZodObject<{
    streams: z.ZodArray<z.ZodObject<{
        codec_type: z.ZodLiteral<"audio">;
        duration: z.ZodCoercedNumber<unknown>;
    }, z.core.$loose>>;
}, z.core.$loose>, z.ZodObject<{
    streams: z.ZodUnion<readonly [z.ZodTuple<[z.ZodObject<{
        codec_type: z.ZodLiteral<"video">;
        duration: z.ZodCoercedNumber<unknown>;
        avg_frame_rate: z.ZodCustom<`${number}/${number}`, `${number}/${number}`>;
    }, z.core.$loose>], null>, z.ZodTuple<[z.ZodObject<{
        codec_type: z.ZodLiteral<"video">;
        duration: z.ZodCoercedNumber<unknown>;
        avg_frame_rate: z.ZodCustom<`${number}/${number}`, `${number}/${number}`>;
    }, z.core.$loose>, z.ZodObject<{
        codec_type: z.ZodLiteral<"audio">;
        duration: z.ZodCoercedNumber<unknown>;
    }, z.core.$loose>], null>, z.ZodTuple<[z.ZodObject<{
        codec_type: z.ZodLiteral<"audio">;
        duration: z.ZodCoercedNumber<unknown>;
    }, z.core.$loose>, z.ZodObject<{
        codec_type: z.ZodLiteral<"video">;
        duration: z.ZodCoercedNumber<unknown>;
        avg_frame_rate: z.ZodCustom<`${number}/${number}`, `${number}/${number}`>;
    }, z.core.$loose>], null>]>;
}, z.core.$loose>]>;
export type ProbeProcessingResponse = z.infer<typeof probeProcessingRequest>;
export declare const videoProcessingRequest: z.ZodObject<{
    sample: z.ZodBoolean;
    videoConfig: z.ZodArray<z.ZodObject<{
        videoPath: z.ZodString;
        imageOverlayPath: z.ZodOptional<z.ZodString>;
        subtitleOverlayPath: z.ZodOptional<z.ZodString>;
        audioOverlayPath: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    orientation: z.ZodEnum<{
        landscape: "landscape";
        portrait: "portrait";
    }>;
}, z.core.$strip>;
export type VideoProcessingRequest = z.infer<typeof videoProcessingRequest>;
export declare const probedVideoProcessingConfigValidation: z.ZodArray<z.ZodObject<{
    videoPath_probed: z.ZodObject<{
        streams: z.ZodUnion<readonly [z.ZodTuple<[z.ZodObject<{
            codec_type: z.ZodLiteral<"video">;
            duration: z.ZodCoercedNumber<unknown>;
            avg_frame_rate: z.ZodCustom<`${number}/${number}`, `${number}/${number}`>;
        }, z.core.$loose>], null>, z.ZodTuple<[z.ZodObject<{
            codec_type: z.ZodLiteral<"video">;
            duration: z.ZodCoercedNumber<unknown>;
            avg_frame_rate: z.ZodCustom<`${number}/${number}`, `${number}/${number}`>;
        }, z.core.$loose>, z.ZodObject<{
            codec_type: z.ZodLiteral<"audio">;
            duration: z.ZodCoercedNumber<unknown>;
        }, z.core.$loose>], null>, z.ZodTuple<[z.ZodObject<{
            codec_type: z.ZodLiteral<"audio">;
            duration: z.ZodCoercedNumber<unknown>;
        }, z.core.$loose>, z.ZodObject<{
            codec_type: z.ZodLiteral<"video">;
            duration: z.ZodCoercedNumber<unknown>;
            avg_frame_rate: z.ZodCustom<`${number}/${number}`, `${number}/${number}`>;
        }, z.core.$loose>], null>]>;
    }, z.core.$loose>;
    imageOverlayPath_probed: z.ZodOptional<z.ZodObject<{
        streams: z.ZodArray<z.ZodObject<{
            codec_type: z.ZodLiteral<"video">;
            duration_ts: z.ZodUnion<readonly [z.ZodLiteral<"N/A">, z.ZodLiteral<1>]>;
        }, z.core.$loose>>;
    }, z.core.$loose>>;
    subtitleOverlayPath_probed: z.ZodOptional<z.ZodObject<{
        streams: z.ZodArray<z.ZodObject<{
            codec_type: z.ZodLiteral<"subtitle">;
        }, z.core.$loose>>;
    }, z.core.$loose>>;
    audioOverlayPath_probed: z.ZodOptional<z.ZodObject<{
        streams: z.ZodArray<z.ZodObject<{
            codec_type: z.ZodLiteral<"audio">;
            duration: z.ZodCoercedNumber<unknown>;
        }, z.core.$loose>>;
    }, z.core.$loose>>;
}, z.core.$strip>>;
export type ProbedVideoProcessingConfigValidation = z.infer<typeof probedVideoProcessingConfigValidation>;
export declare const videoProcessingResponse: z.ZodObject<{
    message: z.ZodUnion<readonly [z.ZodLiteral<"Already processing">, z.ZodLiteral<"Already exists">, z.ZodLiteral<"Queued">]>;
}, z.core.$strip>;
export type VideoProcessingResponse = z.infer<typeof videoProcessingResponse>;
export declare const audioProcessingRequest: z.ZodObject<{
    sample: z.ZodBoolean;
    audioConfig: z.ZodArray<z.ZodObject<{
        audioPath: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type AudioProcessingRequest = z.infer<typeof audioProcessingRequest>;
export declare const probedAudioProcessingConfigValidation: z.ZodArray<z.ZodObject<{
    audioPath_probed: z.ZodOptional<z.ZodObject<{
        streams: z.ZodArray<z.ZodObject<{
            codec_type: z.ZodLiteral<"audio">;
            duration: z.ZodCoercedNumber<unknown>;
        }, z.core.$loose>>;
    }, z.core.$strip>>;
}, z.core.$strip>>;
export type ProbedAudioProcessingConfigValidation = z.infer<typeof probedAudioProcessingConfigValidation>;
export declare const audioProcessingResponse: z.ZodObject<{
    message: z.ZodUnion<readonly [z.ZodLiteral<"Already processing">, z.ZodLiteral<"Already exists">, z.ZodLiteral<"Queued">]>;
}, z.core.$strip>;
export type AudioProcessingResponse = z.infer<typeof audioProcessingResponse>;
export declare const bulkProcessConfigStateProcessingRequest: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
    sample: z.ZodBoolean;
    videoConfig: z.ZodArray<z.ZodObject<{
        videoPath: z.ZodString;
        imageOverlayPath: z.ZodOptional<z.ZodString>;
        subtitleOverlayPath: z.ZodOptional<z.ZodString>;
        audioOverlayPath: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    orientation: z.ZodEnum<{
        landscape: "landscape";
        portrait: "portrait";
    }>;
}, z.core.$strip>, z.ZodObject<{
    sample: z.ZodBoolean;
    audioConfig: z.ZodArray<z.ZodObject<{
        audioPath: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>]>>;
export type BulkProcessConfigStateProcessingRequest = z.infer<typeof bulkProcessConfigStateProcessingRequest>;
export declare const bulkProcessConfigStateProcessingResponse: z.ZodArray<z.ZodIntersection<z.ZodUnion<readonly [z.ZodObject<{
    request: z.ZodObject<{
        sample: z.ZodBoolean;
        videoConfig: z.ZodArray<z.ZodObject<{
            videoPath: z.ZodString;
            imageOverlayPath: z.ZodOptional<z.ZodString>;
            subtitleOverlayPath: z.ZodOptional<z.ZodString>;
            audioOverlayPath: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        orientation: z.ZodEnum<{
            landscape: "landscape";
            portrait: "portrait";
        }>;
    }, z.core.$strip>;
    processConfigState: z.ZodArray<z.ZodObject<{
        videoPath: z.ZodObject<{
            localPath: z.ZodString;
            version: z.ZodString;
        }, z.core.$strip>;
        imageOverlayPath: z.ZodOptional<z.ZodObject<{
            localPath: z.ZodString;
            version: z.ZodString;
        }, z.core.$strip>>;
        subtitleOverlayPath: z.ZodOptional<z.ZodObject<{
            localPath: z.ZodString;
            version: z.ZodString;
        }, z.core.$strip>>;
        audioOverlayPath: z.ZodOptional<z.ZodObject<{
            localPath: z.ZodString;
            version: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
}, z.core.$strip>, z.ZodObject<{
    request: z.ZodObject<{
        sample: z.ZodBoolean;
        audioConfig: z.ZodArray<z.ZodObject<{
            audioPath: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    processConfigState: z.ZodArray<z.ZodObject<{
        audioPath: z.ZodObject<{
            localPath: z.ZodString;
            version: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>>;
}, z.core.$strip>]>, z.ZodObject<{
    processConfigHash: z.ZodString;
    processConfigStateHash: z.ZodString;
    fileName: z.ZodString;
}, z.core.$strip>>>;
export type BulkProcessConfigStateProcessingResponse = z.infer<typeof bulkProcessConfigStateProcessingResponse>;
export {};
