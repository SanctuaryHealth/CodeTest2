import z from "zod";
import { BulkProcessConfigStateProcessingRequest, ProbeProcessingRequest } from "../FFMPEGAPIValidation/FFMPEGValidations.schema.js";
export type FFMPEGClientOptions = {
    url: string;
    apiKey: string;
};
export declare const FFMPEGAPIEndpoints: ["probe", "bulkProcessConfigState"];
declare const FFMPEGAPIEndpointsConfig: {
    readonly probe: {
        readonly requestSchema: z.ZodObject<{
            path: z.ZodString;
        }, z.z.core.$strip>;
        readonly responseSchema: z.ZodUnion<readonly [z.ZodObject<{
            streams: z.ZodArray<z.ZodObject<{
                codec_type: z.ZodLiteral<"subtitle">;
            }, z.z.core.$loose>>;
        }, z.z.core.$loose>, z.ZodObject<{
            streams: z.ZodArray<z.ZodObject<{
                codec_type: z.ZodLiteral<"video">;
                duration_ts: z.ZodUnion<readonly [z.ZodLiteral<"N/A">, z.ZodLiteral<1>]>;
            }, z.z.core.$loose>>;
        }, z.z.core.$loose>, z.ZodObject<{
            streams: z.ZodArray<z.ZodObject<{
                codec_type: z.ZodLiteral<"audio">;
                duration: z.z.ZodCoercedNumber<unknown>;
            }, z.z.core.$loose>>;
        }, z.z.core.$loose>, z.ZodObject<{
            streams: z.ZodUnion<readonly [z.ZodTuple<[z.ZodObject<{
                codec_type: z.ZodLiteral<"video">;
                duration: z.z.ZodCoercedNumber<unknown>;
                avg_frame_rate: z.ZodCustom<`${number}/${number}`, `${number}/${number}`>;
            }, z.z.core.$loose>], null>, z.ZodTuple<[z.ZodObject<{
                codec_type: z.ZodLiteral<"video">;
                duration: z.z.ZodCoercedNumber<unknown>;
                avg_frame_rate: z.ZodCustom<`${number}/${number}`, `${number}/${number}`>;
            }, z.z.core.$loose>, z.ZodObject<{
                codec_type: z.ZodLiteral<"audio">;
                duration: z.z.ZodCoercedNumber<unknown>;
            }, z.z.core.$loose>], null>, z.ZodTuple<[z.ZodObject<{
                codec_type: z.ZodLiteral<"audio">;
                duration: z.z.ZodCoercedNumber<unknown>;
            }, z.z.core.$loose>, z.ZodObject<{
                codec_type: z.ZodLiteral<"video">;
                duration: z.z.ZodCoercedNumber<unknown>;
                avg_frame_rate: z.ZodCustom<`${number}/${number}`, `${number}/${number}`>;
            }, z.z.core.$loose>], null>]>;
        }, z.z.core.$loose>]>;
    };
    readonly bulkProcessConfigState: {
        readonly requestSchema: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
            sample: z.ZodBoolean;
            videoConfig: z.ZodArray<z.ZodObject<{
                videoPath: z.ZodString;
                imageOverlayPath: z.ZodOptional<z.ZodString>;
                subtitleOverlayPath: z.ZodOptional<z.ZodString>;
                audioOverlayPath: z.ZodOptional<z.ZodString>;
            }, z.z.core.$strip>>;
            orientation: z.ZodEnum<{
                landscape: "landscape";
                portrait: "portrait";
            }>;
        }, z.z.core.$strip>, z.ZodObject<{
            sample: z.ZodBoolean;
            audioConfig: z.ZodArray<z.ZodObject<{
                audioPath: z.ZodString;
            }, z.z.core.$strip>>;
        }, z.z.core.$strip>]>>;
        readonly responseSchema: z.ZodArray<z.ZodIntersection<z.ZodUnion<readonly [z.ZodObject<{
            request: z.ZodObject<{
                sample: z.ZodBoolean;
                videoConfig: z.ZodArray<z.ZodObject<{
                    videoPath: z.ZodString;
                    imageOverlayPath: z.ZodOptional<z.ZodString>;
                    subtitleOverlayPath: z.ZodOptional<z.ZodString>;
                    audioOverlayPath: z.ZodOptional<z.ZodString>;
                }, z.z.core.$strip>>;
                orientation: z.ZodEnum<{
                    landscape: "landscape";
                    portrait: "portrait";
                }>;
            }, z.z.core.$strip>;
            processConfigState: z.ZodArray<z.ZodObject<{
                videoPath: z.ZodObject<{
                    localPath: z.ZodString;
                    version: z.ZodString;
                }, z.z.core.$strip>;
                imageOverlayPath: z.ZodOptional<z.ZodObject<{
                    localPath: z.ZodString;
                    version: z.ZodString;
                }, z.z.core.$strip>>;
                subtitleOverlayPath: z.ZodOptional<z.ZodObject<{
                    localPath: z.ZodString;
                    version: z.ZodString;
                }, z.z.core.$strip>>;
                audioOverlayPath: z.ZodOptional<z.ZodObject<{
                    localPath: z.ZodString;
                    version: z.ZodString;
                }, z.z.core.$strip>>;
            }, z.z.core.$strip>>;
        }, z.z.core.$strip>, z.ZodObject<{
            request: z.ZodObject<{
                sample: z.ZodBoolean;
                audioConfig: z.ZodArray<z.ZodObject<{
                    audioPath: z.ZodString;
                }, z.z.core.$strip>>;
            }, z.z.core.$strip>;
            processConfigState: z.ZodArray<z.ZodObject<{
                audioPath: z.ZodObject<{
                    localPath: z.ZodString;
                    version: z.ZodString;
                }, z.z.core.$strip>;
            }, z.z.core.$strip>>;
        }, z.z.core.$strip>]>, z.ZodObject<{
            processConfigHash: z.ZodString;
            processConfigStateHash: z.ZodString;
            fileName: z.ZodString;
        }, z.z.core.$strip>>>;
    };
};
type FFMPEGClientType = {
    [K in keyof typeof FFMPEGAPIEndpointsConfig]: (request: z.infer<(typeof FFMPEGAPIEndpointsConfig)[K]["requestSchema"]>) => Promise<z.infer<(typeof FFMPEGAPIEndpointsConfig)[K]["responseSchema"]>>;
};
export default class FFMPEGClient implements FFMPEGClientType {
    constructor({ url, apiKey }: FFMPEGClientOptions);
    private url;
    private apiKey;
    probe(request: ProbeProcessingRequest): Promise<{
        [x: string]: unknown;
        streams: {
            [x: string]: unknown;
            codec_type: "video";
            duration_ts: 1 | "N/A";
        }[];
    } | {
        [x: string]: unknown;
        streams: {
            [x: string]: unknown;
            codec_type: "subtitle";
        }[];
    } | {
        [x: string]: unknown;
        streams: {
            [x: string]: unknown;
            codec_type: "audio";
            duration: number;
        }[];
    } | {
        [x: string]: unknown;
        streams: [{
            [x: string]: unknown;
            codec_type: "video";
            duration: number;
            avg_frame_rate: `${number}/${number}`;
        }] | [{
            [x: string]: unknown;
            codec_type: "video";
            duration: number;
            avg_frame_rate: `${number}/${number}`;
        }, {
            [x: string]: unknown;
            codec_type: "audio";
            duration: number;
        }] | [{
            [x: string]: unknown;
            codec_type: "audio";
            duration: number;
        }, {
            [x: string]: unknown;
            codec_type: "video";
            duration: number;
            avg_frame_rate: `${number}/${number}`;
        }];
    }>;
    bulkProcessConfigState(request: BulkProcessConfigStateProcessingRequest): Promise<(({
        request: {
            sample: boolean;
            videoConfig: {
                videoPath: string;
                imageOverlayPath?: string | undefined;
                subtitleOverlayPath?: string | undefined;
                audioOverlayPath?: string | undefined;
            }[];
            orientation: "landscape" | "portrait";
        };
        processConfigState: {
            videoPath: {
                localPath: string;
                version: string;
            };
            imageOverlayPath?: {
                localPath: string;
                version: string;
            } | undefined;
            subtitleOverlayPath?: {
                localPath: string;
                version: string;
            } | undefined;
            audioOverlayPath?: {
                localPath: string;
                version: string;
            } | undefined;
        }[];
    } | {
        request: {
            sample: boolean;
            audioConfig: {
                audioPath: string;
            }[];
        };
        processConfigState: {
            audioPath: {
                localPath: string;
                version: string;
            };
        }[];
    }) & {
        processConfigHash: string;
        processConfigStateHash: string;
        fileName: string;
    })[]>;
    private sendRequest;
}
export {};
