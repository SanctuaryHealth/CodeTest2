import { StateAnnotation } from "../retrieval_graph/state.js"

export async function respond(state: typeof StateAnnotation.State): Promise<typeof StateAnnotation.Update> {
    return { messages: [JSON.stringify(state.retrievedDocs, null, 4)] }
}
