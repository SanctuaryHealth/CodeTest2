import { Document } from "@langchain/core/documents"
import { BaseMessage } from "@langchain/core/messages"
import { Annotation, MessagesAnnotation } from "@langchain/langgraph"

export const InputStateAnnotation = Annotation.Root({
    messages: Annotation<BaseMessage[]>
})

export const StateAnnotation = Annotation.Root({
    ...MessagesAnnotation.spec,

    retrievedDocs: Annotation<Document[]>
})
