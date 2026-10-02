export const chunkArray = (array, chunkSize) => {
    const result = [];
    if (chunkSize < 1) {
        throw new Error("Chunk size too small");
    }
    for (let i = 0; i < array.length; i += chunkSize) {
        result.push(array.slice(i, i + chunkSize));
    }
    return result;
};
