import type { Day } from "../Days";

export class DaySolution implements Day {
  solution1 = (input: string[]): Promise<string> => {
    return new Promise((resolve, reject) => {
      const answer = input
        .map((s) => parseInt(s))
        .reduce((prev, curr, i, arr) => {
          if (i > 0 && arr[i - 1] < curr) {
            return prev + 1;
          } else {
            return prev;
          }
        }, 0);
      resolve(String(answer));
    });
  };

  solution2 = (input: string[]): Promise<string> => {
    type Result = {
      answer: number;
      prev?: number;
    };

    return new Promise((resolve, reject) => {
      resolve(
        String(
          input
            .map((s) => parseInt(s))
            .reduce(
              (prev: Result, curr: number, i: number, arr: number[]) => {
                if (i > 1) {
                  const v = arr[i] + arr[i - 1] + arr[i - 2];
                  if (prev.prev === undefined) {
                    return {
                      prev: v,
                      answer: 0,
                    } as Result;
                  }
                  if (prev.prev < v) {
                    return {
                      prev: v,
                      answer: prev.answer + 1,
                    } as Result;
                  }
                }
                return prev;
              },
              {
                answer: 0,
              } as Result
            ).answer
        )
      );
    });
  };
}
