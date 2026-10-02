import https from "https";
import fetch from "node-fetch";
import { bulkProcessConfigStateProcessingRequest, bulkProcessConfigStateProcessingResponse, probeProcessingRequest, probeProcessingResponse } from "../FFMPEGAPIValidation/FFMPEGValidations.schema.js";
import { chunkArrayByBytes } from "../helpers/chunkArrayByBytes.js";
const FFMPEGAgent = new https.Agent({ keepAlive: true, maxSockets: 50, timeout: 60000 });
export const FFMPEGAPIEndpoints = ["probe", "bulkProcessConfigState"];
const FFMPEGAPIEndpointsConfig = {
    probe: {
        requestSchema: probeProcessingRequest,
        responseSchema: probeProcessingResponse
    },
    bulkProcessConfigState: {
        requestSchema: bulkProcessConfigStateProcessingRequest,
        responseSchema: bulkProcessConfigStateProcessingResponse
    }
};
export default class FFMPEGClient {
    constructor({ url, apiKey }) {
        this.url = url;
        this.apiKey = apiKey;
    }
    url;
    apiKey;
    async probe(request) {
        return probeProcessingResponse.parse(await this.sendRequest("probe", request));
    }
    async bulkProcessConfigState(request) {
        const chunkedRequest = chunkArrayByBytes(request, 100000);
        const results = await Promise.all(chunkedRequest.map((chunk) => this.sendRequest("bulkProcessConfigState", chunk)));
        return bulkProcessConfigStateProcessingResponse.parse(results.flat());
    }
    async sendRequest(endpoint, request) {
        const response = await fetch(`${this.url}/${endpoint}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: this.apiKey
            },
            body: JSON.stringify(request),
            agent: FFMPEGAgent
        });
        if (!response.ok) {
            throw new Error(`FFMPEG client request error! Status: ${response.status}`);
        }
        return response.json();
    }
}
