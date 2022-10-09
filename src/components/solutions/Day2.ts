import type { Day } from "../Days";

export class DaySolution implements Day {
  solution1 = (input: string[]): Promise<string> => {
    type Result = {
      position: number;
      depth: number;
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
              };
            case "down":
              return {
                ...prev,
                depth: prev.depth + num,
              };
            case "up":
              return {
                ...prev,
                depth: prev.depth - num,
              };
          }
          return prev;
        }, {
          position: 0,
          depth: 0,
        } as Result
      );
      console.log("answer", answer);
      resolve(String(answer.depth * answer.position));
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
        }, {
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
