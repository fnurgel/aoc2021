import type { Day } from "../Days";

export class DaySolution implements Day {
  solution1 = (input: string[]): Promise<string> => {
    return new Promise((resolve, reject) => {
      let fishes = input[0].split(",").map((v) => parseInt(v));
      const iterations = 80;
      for (let i = 0; i < iterations; i++) {
        const newFishes = fishes.reduce((prev, curr, idx, arr) => {
          if (curr === 0) {
            arr[idx] = 6;
            prev.push(8);
          } else {
            arr[idx]--;
          }
          return prev;
        }, Array<number>());
        fishes = fishes.concat(newFishes);
      }
      resolve(String(fishes.length));
    });
  };

  solution2 = (input: string[]): Promise<string> => {
    return new Promise((resolve, reject) => {
      resolve(String(""));
    });
  };
}
