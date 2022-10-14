import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { DaySolution } from "../Day3";

/**
 * @vitest-environment jsdom
 */

describe("Day3", () => {
  const input = [
    "00100",
    "11110",
    "10110",
    "10111",
    "10101",
    "01111",
    "00111",
    "11100",
    "10000",
    "11001",
    "00010",
    "01010",
  ];
  it("solution1", async () => {
    const result = await new DaySolution().solution1(input);
    expect(result).toBe("198");
  });
  // it("solution2", async () => {
  //   const result = await new DaySolution().solution2(input);
  //   expect(result).toBe("900");
  // });
});
