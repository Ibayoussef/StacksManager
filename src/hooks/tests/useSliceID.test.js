import { sliceID } from "../useSliceID";

test("useSliceID should return the first 6 characters of a string", () => {
  const input = "1234567890";
  const expectedOutput = "123456";

  const result = sliceID(input);

  expect(result).toBe(expectedOutput);
});
