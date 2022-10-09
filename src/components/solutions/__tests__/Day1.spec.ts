import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { DaySolution } from "../Day1";

describe("Day1", () => {
  const input = [
    "199",
    "200",
    "208",
    "210",
    "200",
    "207",
    "240",
    "269",
    "260",
    "263",
  ];
  it("solution1", async () => {
    const result = await new DaySolution().solution1(input);
    expect(result).toBe("7");
  });
  it("solution2", async () => {
    const result = await new DaySolution().solution2(input);
    expect(result).toBe("5");
  });
});
