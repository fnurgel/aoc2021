import type { Day } from "../Days";

export class DaySolution implements Day {
  solution1 = (input: string[]): Promise<string> => {
    type Result = {
      position: number;
      depth: number;
    };
    console.log("input", input);
    return new Promise((resolve, reject) => {
      const bitsByLine = input.map((line) =>
        line.split("").map((b) => parseInt(b))
      );
      const bits = bitsByLine.reduce((prev, curr, i, arr) => {
        curr.forEach((b, i) =>
          prev.has(i) ? prev.get(i)?.push(b) : prev.set(i, [b])
        );
        return prev;
      }, new Map<number, number[]>());
      console.log("bits", bits);
      const sumByIdx: number[] = [];
      bits.forEach((values, idx) => {
        const sum = values.reduce((prev, curr) => {
          return prev + curr;
        }, 0);
        sumByIdx.push(sum);
      });
      console.log(sumByIdx, bitsByLine[0].length);
      const mostByIdx = sumByIdx.map((sum) => {
        return sum > bitsByLine.length / 2 ? 1 : 0;
      });
      const leastByIdx = sumByIdx.map((sum) => {
        return sum < bitsByLine.length / 2 ? 1 : 0;
      });
      console.log("mostByIdx", mostByIdx);
      const gamma = parseInt(mostByIdx.join(""), 2);
      const epsilon = parseInt(leastByIdx.join(""), 2);
      console.log("gamma", gamma.toString(2), "epsilon", epsilon.toString(2));
      resolve(String(gamma * epsilon));
    });
  };

  solution2 = (input: string[]): Promise<string> => {
    type Result = {
      position: number;
      depth: number;
      aim: number;
    };
    console.log("input", input);
    return new Promise((resolve, reject) => {
      const answer = input
        .reduce((prev, curr, i, arr) => {
          const command = curr.split(" ")[0];
          const num = parseInt(curr.split(" ")[1]);
          switch (command) {
            case "forward":
              return {
                ...prev,
                position: prev.position + num,
                depth: prev.depth + prev.aim * num,
              };
            case "down":
              return {
                ...prev,
                aim: prev.aim + num,
              };
            case "up":
              return {
                ...prev,
                aim: prev.aim - num,
              };
          }
          return prev;
        },
        {
          position: 0,
          depth: 0,
          aim: 0,
        } as Result
      );
      console.log("answer", answer);
      resolve(String(answer.depth * answer.position));
    });
  };
}
