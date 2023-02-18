import { Stack } from "../Enums/Stack";

export const usePaginate = (stacks: Stack[]): Stack[][] => {
  const pages: Stack[][] = [];
  const pageCount = Math.ceil(stacks.length / 4);

  for (let i = 0; i < pageCount; i++) {
    const startIndex = i * 4;
    const page = stacks.slice(startIndex, startIndex + 4);
    pages.push(page);
  }

  return pages;
};
