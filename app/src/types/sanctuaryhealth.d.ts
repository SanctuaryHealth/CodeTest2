declare module "@sanctuaryhealth/constants/FFMPEGClient" {
    export type FFMPEGClientOptions = {
        url: string
        apiKey: string
    }

    export default class FFMPEGClient {
        constructor(options: FFMPEGClientOptions)
        probe(request: { path: string }): Promise<unknown>
        bulkProcessConfigState(request: unknown): Promise<unknown>
    }
}
