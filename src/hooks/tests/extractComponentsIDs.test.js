import { extractComponentsIDs } from "../extractComponentsIDs";

describe("extractComponentsIDs", () => {
  it("should extract component IDs", () => {
    const components = {
      header: ["header-id", { title: "Header" }],
      footer: ["footer-id", { title: "Footer" }],
      main: ["main-id", { title: "Main" }],
    };
    const expected = ["header-id", "footer-id", "main-id"];
    expect(extractComponentsIDs(components)).toEqual(expected);
  });

  it("should handle an empty components object", () => {
    const components = {};
    const expected = [];
    expect(extractComponentsIDs(components)).toEqual(expected);
  });
});
