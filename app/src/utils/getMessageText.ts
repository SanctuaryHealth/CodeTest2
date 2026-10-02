import { BaseMessage } from "@langchain/core/messages"

export function getMessageText(msg: BaseMessage): string {
    const content = msg.content
    if (typeof content === "string") {
        return content
    } else {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const txts = (content as any[]).map((c) => (typeof c === "string" ? c : c.text || ""))
        return txts.join("").trim()
    }
}
