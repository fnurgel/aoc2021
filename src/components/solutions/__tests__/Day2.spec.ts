import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { DaySolution } from "../Day2";

describe("Day2", () => {
  const input = [
    "forward 5",
    "down 5",
    "forward 8",
    "up 3",
    "down 8",
    "forward 2",
  ];
  it("solution1", async () => {
    const result = await new DaySolution().solution1(input);
    expect(result).toBe("150");
  });
  it("solution2", async () => {
    const result = await new DaySolution().solution2(input);
    expect(result).toBe("900");
  });
});
