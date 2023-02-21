/**

Paginates an array of Stack objects by dividing it into smaller arrays of 4 objects each.
@param {Stack[]} stacks - The array of Stack objects to be paginated.
@returns {Stack[][]} An array of arrays, each containing up to 4 Stack objects, representing the paginated data.
*/
export const usePaginate = (stacks) => {
    const pages = [];
    const pageCount = Math.ceil(stacks.length / 4);
    for (let i = 0; i < pageCount; i++) {
        const startIndex = i * 4;
        const page = stacks.slice(startIndex, startIndex + 4);
        pages.push(page);
    }
    return pages;
};
