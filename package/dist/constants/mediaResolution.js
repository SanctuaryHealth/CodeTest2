export const audioResolutionValues = ["192kbps", "128kbps", "64kbps"];
export const audioResolutionKbpsValues = {
    "192kbps": 192,
    "128kbps": 128,
    "64kbps": 64
};
export const videoResolutionValues = ["4k", "1440p", "1080p", "720p", "480p"];
export const videoResolutionSettings = {
    "4k": {
        largeDimension: 3840,
        smallDimension: 2160,
        videoBitrateKbps: 8000,
        frameRate: 30,
        audioBitRateKbps: 192
    },
    "1440p": {
        largeDimension: 2560,
        smallDimension: 1440,
        frameRate: 30,
        videoBitrateKbps: 6000,
        audioBitRateKbps: 192
    },
    "1080p": {
        largeDimension: 1920,
        smallDimension: 1080,
        frameRate: 30,
        videoBitrateKbps: 2000,
        audioBitRateKbps: 128
    },
    "720p": {
        largeDimension: 1280,
        smallDimension: 720,
        frameRate: 30,
        videoBitrateKbps: 1500,
        audioBitRateKbps: 128
    },
    "480p": {
        largeDimension: 852,
        smallDimension: 480,
        frameRate: 30,
        videoBitrateKbps: 400,
        audioBitRateKbps: 128
    }
};
