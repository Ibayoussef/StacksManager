import { usePaginate } from "../usePaginate";

describe("usePaginate", () => {
  it("should return an empty array when stacks is empty", () => {
    const stacks = [];
    const expected = [];
    expect(usePaginate(stacks)).toEqual(expected);
  });

  it("should return a single page when stacks has 4 items or less", () => {
    const stacks = [
      { id: "1", name: "Stack 1" },
      { id: "2", name: "Stack 2" },
      { id: "3", name: "Stack 3" },
      { id: "4", name: "Stack 4" },
    ];
    const expected = [
      [
        { id: "1", name: "Stack 1" },
        { id: "2", name: "Stack 2" },
        { id: "3", name: "Stack 3" },
        { id: "4", name: "Stack 4" },
      ],
    ];
    expect(usePaginate(stacks)).toEqual(expected);
  });

  it("should return multiple pages when stacks has more than 4 items", () => {
    const stacks = [
      { id: "1", name: "Stack 1" },
      { id: "2", name: "Stack 2" },
      { id: "3", name: "Stack 3" },
      { id: "4", name: "Stack 4" },
      { id: "5", name: "Stack 5" },
      { id: "6", name: "Stack 6" },
      { id: "7", name: "Stack 7" },
      { id: "8", name: "Stack 8" },
    ];
    const expected = [
      [
        { id: "1", name: "Stack 1" },
        { id: "2", name: "Stack 2" },
        { id: "3", name: "Stack 3" },
        { id: "4", name: "Stack 4" },
      ],
      [
        { id: "5", name: "Stack 5" },
        { id: "6", name: "Stack 6" },
        { id: "7", name: "Stack 7" },
        { id: "8", name: "Stack 8" },
      ],
    ];
    expect(usePaginate(stacks)).toEqual(expected);
  });
});
