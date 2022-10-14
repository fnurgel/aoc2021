import { describe, it, expect } from "vitest";
import { DaySolution } from "../Day5";

/**
 * @vitest-environment jsdom
 */

describe("Day5", () => {
  const input = [
    "0,9 -> 5,9",
    "8,0 -> 0,8",
    "9,4 -> 3,4",
    "2,2 -> 2,1",
    "7,0 -> 7,4",
    "6,4 -> 2,0",
    "0,9 -> 2,9",
    "3,4 -> 1,4",
    "0,0 -> 8,8",
    "5,5 -> 8,2",
  ];
  it("solution1", async () => {
    const result = await new DaySolution().solution1(input);
    expect(result).toBe("5");
  });
  it("solution2", async () => {
    const result = await new DaySolution().solution2(input);
    expect(result).toBe("12");
  });
});
