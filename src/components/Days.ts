import { DaySolution as Day1 } from "@/components/solutions/Day1";
import { DaySolution as Day2 } from "@/components/solutions/Day2";
import { DaySolution as Day3 } from "@/components/solutions/Day3";
import { DaySolution as Day4 } from "@/components/solutions/Day4";
import { DaySolution as Day5 } from "@/components/solutions/Day5";

export const days = new Map<number, Day>([
  [1, new Day1()],
  [2, new Day2()],
  [3, new Day3()],
  [4, new Day4()],
  [5, new Day5()],
]);

export const getDay = (id: number): Day => {
  return days.get(id) ?? new Day1();
};

export interface Day {
  solution1(input: string[]): Promise<string>;
  solution2(input: string[]): Promise<string>;
}
