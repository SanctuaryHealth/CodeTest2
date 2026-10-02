import { StateAnnotation } from "../retrieval_graph/state.js"
import { VertexAIEmbeddings } from "@langchain/google-vertexai"
import { PineconeStore } from "@langchain/pinecone"
import { Pinecone } from "@pinecone-database/pinecone"
import { getMessageText } from "../utils/getMessageText.js"

export async function vectorSearch(state: typeof StateAnnotation.State): Promise<typeof StateAnnotation.Update> {
    const query = getMessageText(state.messages[state.messages.length - 1])

    const embeddingModel = new VertexAIEmbeddings({ model: "text-embedding-005" })

    const indexName = process.env.PINECONE_INDEX_NAME
    if (!indexName) {
        throw new Error("PINECONE_INDEX_NAME environment variable is not defined")
    }

    const pinecone = new Pinecone()
    const pineconeIndex = pinecone.Index(indexName)
    const vectorStore = await PineconeStore.fromExistingIndex(embeddingModel, {
        pineconeIndex
    })

    const retriever = vectorStore.asRetriever({ k: 10 })

    const response = await retriever.invoke(query)

    return { retrievedDocs: response }
}
