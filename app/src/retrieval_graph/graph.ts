import { END, START, StateGraph } from "@langchain/langgraph"
import { StateAnnotation, InputStateAnnotation } from "./state.js"
import { respond } from "../nodes/respond.js"
import { vectorSearch } from "../nodes/vectorSearch.js"
import { noResultsResponse } from "../nodes/noResultsResponse.js"

const builder = new StateGraph({
    stateSchema: StateAnnotation,
    input: InputStateAnnotation
})
    .addNode("vectorSearch", vectorSearch)
    .addNode("respond", respond)
    .addNode("noResultsResponse", noResultsResponse)
    .addEdge(START, "vectorSearch")
    .addConditionalEdges("vectorSearch", (state) => (state.retrievedDocs.length > 0).toString(), {
        true: "respond",
        false: "noResultsResponse"
    })
    .addEdge("noResultsResponse", END)
    .addEdge("respond", END)

export const graph = builder.compile({
    interruptBefore: [],
    interruptAfter: []
})

graph.name = "Demo Graph"
