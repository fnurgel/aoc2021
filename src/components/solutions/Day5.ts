import type { Day } from "../Days";

type Line = {
  leftXY: number[];
  rightXY: number[];
};

export class DaySolution implements Day {
  constructor() {
    this.newPoints();
  }

  newPoints = (): number[][] => {
    const points = Array(1000).fill(0);
    points.forEach((v, i) => {
      points[i] = Array(1000).fill(0);
    });
    return points;
  };

  drawLine = (points: number[][], leftXY: number[], rightXY: number[]) => {
    const yIncr = leftXY[1] === rightXY[1] ? 0 : leftXY[1] > rightXY[1] ? -1 : 1;
    const xIncr = leftXY[0] === rightXY[0] ? 0 : leftXY[0] > rightXY[0] ? -1 : 1;
    let y = leftXY[1];
    let x = leftXY[0];
    do {
      points[y][x]++;
      y += yIncr;
      x += xIncr;
    } while (x !== rightXY[0] + xIncr || y !== rightXY[1] + yIncr);
  };

  extractXY = (line: string): Line | undefined => {
    const leftAndRight = line.split("->");
    if (leftAndRight.length == 2) {
      const left = leftAndRight[0].split(",").map((numStr) => parseInt(numStr));
      const right = leftAndRight[1]
        .split(",")
        .map((numStr) => parseInt(numStr));
      return {
        leftXY: left,
        rightXY: right,
      } as Line;
    }
  };

  solution1 = (input: string[]): Promise<string> => {
    return new Promise((resolve, reject) => {
      const points = this.newPoints();
      input.forEach((line) => {
        const { leftXY, rightXY } = this.extractXY(line) ?? {};
        if (leftXY && rightXY) {
          if (leftXY[0] === rightXY[0] || leftXY[1] === rightXY[1]) {
            this.drawLine(points, leftXY, rightXY);
          }
        }
      });
      const antal = points.reduce((prev, curr) => {
        const inner = curr.reduce((prevInner, currInner) => {
          if (currInner > 1) {
            prevInner++;
          }
          return prevInner;
        }, 0);
        return prev + inner;
      }, 0);
      resolve(String(antal));
    });
  };

  solution2 = (input: string[]): Promise<string> => {
    return new Promise((resolve, reject) => {
      const points = this.newPoints();
      input.forEach((line) => {
        const { leftXY, rightXY } = this.extractXY(line) ?? {};
        if (leftXY && rightXY) {
          if (
            leftXY[0] === rightXY[0] ||
            leftXY[1] === rightXY[1] ||
            Math.abs(leftXY[0] - rightXY[0]) ===
              Math.abs(leftXY[1] - rightXY[1])
          ) {
            this.drawLine(points, leftXY, rightXY);
          }
        }
      });
      const antal = points.reduce((prev, curr) => {
        const inner = curr.reduce((prevInner, currInner) => {
          if (currInner > 1) {
            prevInner++;
          }
          return prevInner;
        }, 0);
        return prev + inner;
      }, 0);
      resolve(String(antal));
    });
  };
}
