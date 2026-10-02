export const chunkArrayByBytes = (array, chunkSizeBytes) => {
    const textEncoder = new TextEncoder();
    const result = [[]];
    if (chunkSizeBytes < 1) {
        throw new Error("Chunk size too small");
    }
    let currentBytesInChunk = 0;
    for (const item of array) {
        const itemSizeBytes = textEncoder.encode(JSON.stringify(item)).length;
        if (itemSizeBytes > chunkSizeBytes) {
            throw new Error(`Item in is larger than max allowable chunk size`);
        }
        if (currentBytesInChunk + itemSizeBytes <= chunkSizeBytes) {
            currentBytesInChunk += itemSizeBytes;
            result[result.length - 1].push(item);
        }
        else {
            currentBytesInChunk = 0;
            result.push([item]);
        }
    }
    return result;
};
