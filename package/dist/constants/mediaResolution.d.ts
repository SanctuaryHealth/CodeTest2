export declare const audioResolutionValues: ["192kbps", "128kbps", "64kbps"];
export type AudioResolution = (typeof audioResolutionValues)[number];
export declare const audioResolutionKbpsValues: {
    readonly "192kbps": 192;
    readonly "128kbps": 128;
    readonly "64kbps": 64;
};
export declare const videoResolutionValues: ["4k", "1440p", "1080p", "720p", "480p"];
export type VideoResolution = (typeof videoResolutionValues)[number];
export declare const videoResolutionSettings: {
    readonly "4k": {
        readonly largeDimension: 3840;
        readonly smallDimension: 2160;
        readonly videoBitrateKbps: 8000;
        readonly frameRate: 30;
        readonly audioBitRateKbps: 192;
    };
    readonly "1440p": {
        readonly largeDimension: 2560;
        readonly smallDimension: 1440;
        readonly frameRate: 30;
        readonly videoBitrateKbps: 6000;
        readonly audioBitRateKbps: 192;
    };
    readonly "1080p": {
        readonly largeDimension: 1920;
        readonly smallDimension: 1080;
        readonly frameRate: 30;
        readonly videoBitrateKbps: 2000;
        readonly audioBitRateKbps: 128;
    };
    readonly "720p": {
        readonly largeDimension: 1280;
        readonly smallDimension: 720;
        readonly frameRate: 30;
        readonly videoBitrateKbps: 1500;
        readonly audioBitRateKbps: 128;
    };
    readonly "480p": {
        readonly largeDimension: 852;
        readonly smallDimension: 480;
        readonly frameRate: 30;
        readonly videoBitrateKbps: 400;
        readonly audioBitRateKbps: 128;
    };
};
