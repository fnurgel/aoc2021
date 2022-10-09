import type { Day } from "../Days";

class Board {
  public numbers: number[][];
  public checked: boolean[][];

  constructor(size: number) {
    this.numbers = [];
    this.checked = Array.from({ length: size }, () => Array(size).fill(false));
  }

  public checkForBingo(): boolean {
    const rowBingo = this.checked
      .map((row) => row.reduce((prev, curr) => curr && prev, true))
      .filter((b) => b);
    if (rowBingo.length > 0) {
      return true;
    }
    for (let i = 0; i < this.checked.length; i++) {
      if (this.checked.filter((arr) => arr[i]).length === this.checked.length) {
        return true;
      }
    }
    return false;
  }

  public sumUnchecked = (): number => {
    if (!this.checkForBingo()) {
      return 0;
    }
    let sum = 0;
    for (let i = 0; i < this.checked.length; i++) {
      for (let j = 0; j < this.checked.length; j++) {
        if (!this.checked[i][j]) {
          sum += this.numbers[i][j];
        }
      }
    }
    return sum;
  };

  public playNumber(num: number): boolean {
    const columns = this.numbers.map((row) => row.findIndex((v) => v === num));
    const rowIdx = columns.findIndex((v) => v > -1);
    const columnIdx = columns[rowIdx];
    if (rowIdx > -1) {
      this.checked[rowIdx][columnIdx] = true;
    }
    return this.checkForBingo();
  }
}

class Bingo {
  public numbers: number[];
  public boards: Board[];
  public newboard: Board | undefined;

  constructor(input: string[]) {
    let boardSize = 0;
    this.boards = [];
    this.numbers = [];
    input.forEach((curr, i) => {
      if (i === 0) {
        this.numbers = curr.split(",").map((s) => parseInt(s));
      } else {
        if (curr === "") {
          if (this.newboard) {
            this.boards.push(this.newboard);
            this.newboard = new Board(boardSize);
          }
        } else {
          const columns = curr.match(/.{1,3}/g) || [];
          if (boardSize === 0) {
            boardSize = columns.length;
          }
          const columnnumbers = columns.map((n) => parseInt(n));
          if (this.newboard === undefined) {
            this.newboard = new Board(boardSize);
          }
          this.newboard.numbers.push(columnnumbers);
        }
      }
    });
    if (this.newboard && this.newboard.numbers.length > 0) {
      this.boards.push(this.newboard);
    }
  }

  public play1 = (): number => {
    const bingonum = this.numbers.find((n) => this.boards.find((b) => b.playNumber(n))) ?? -1;
    const sum = this.boards.map((b) => b.sumUnchecked()).find((s) => s > 0) ?? -1;
    return sum * bingonum;
  };
  public play2 = (): number => {
    const bingoes: Board[] = [];
    const bingonum = this.numbers.find((n) => {
        return (this.boards.find((b) => {
            if (!b.checkForBingo() && b.playNumber(n)) {
              bingoes.push(b);
              if (bingoes.length === this.boards.length) {
                return true;
              }
            }
            return false;
          }) !== undefined
        );
      }) ?? 0;
    const sum = bingoes[bingoes.length - 1].sumUnchecked();
    return sum * bingonum;
  };
}
export class DaySolution implements Day {
  solution1 = (input: string[]): Promise<string> => {
    return new Promise((resolve, reject) => {
      const bingo = new Bingo(input);
      resolve(String(bingo.play1()));
    });
  };

  solution2 = (input: string[]): Promise<string> => {
    return new Promise((resolve, reject) => {
      const bingo = new Bingo(input);
      resolve(String(bingo.play2()));
    });
  };
}
