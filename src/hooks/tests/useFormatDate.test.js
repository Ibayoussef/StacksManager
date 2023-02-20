import { useFormatDate } from "../useFormatDate";

describe("useFormatDate", () => {
  it("should format a valid date string", () => {
    const created = "2023-02-17T16:44:32.234Z";
    const expected = "17.02.2023 17:44:32";
    expect(useFormatDate(created)).toEqual(expected);
  });

  it("should return an empty string in case the date is invalid", () => {
    const created = "invalid-date-string";
    expect(useFormatDate(created)).toBe("");
  });
});
