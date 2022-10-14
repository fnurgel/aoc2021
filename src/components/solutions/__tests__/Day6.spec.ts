import { describe, it, expect } from "vitest";
import { DaySolution } from "../Day6";

/**
 * @vitest-environment jsdom
 */

describe("Day6", () => {
  const input = ["3,4,3,1,2"];
  it("solution1", async () => {
    const result = await new DaySolution().solution1(input);
    expect(result).toBe("5934");
  });
  // it("solution2", async () => {
  //   const result = await new DaySolution().solution2(input);
  //   expect(result).toBe("26984457539");
  // });
});
