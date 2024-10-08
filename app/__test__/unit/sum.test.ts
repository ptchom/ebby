import { assert, describe, expect, test } from "vitest";

import { sum } from "~/__test__/unit/sum";

describe("Sum function tests", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).to.equal(3);
  });
  test("adds 2 + 3 to equal 5", () => {
    assert.equal(sum(2, 3), 5);
  });
});
