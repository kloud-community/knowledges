import { expect, test } from "bun:test";

test("This fails", () => {
  expect(1 + 1).not.toBe(2);
});
