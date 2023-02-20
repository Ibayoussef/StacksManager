import { getComponentsNumber } from "../getComponentsNumber";

describe("getComponentsNumber", () => {
  it("should return the number of components", () => {
    const components = {
      header: ["header-id", { title: "Header" }],
      footer: ["footer-id", { title: "Footer" }],
      main: ["main-id", { title: "Main" }],
    };
    const expected = 3;
    expect(getComponentsNumber(components)).toEqual(expected);
  });

  it("should return 0 for an empty components object", () => {
    const components = {};
    const expected = 0;
    expect(getComponentsNumber(components)).toEqual(expected);
  });
});
