export default class CalculateScore {
  [key: string]:
    | null
    | number[]
    | (() => number | null)
    | ((target: number) => number | null)
    | (() => number[]);

  #diceValues: number[] | null;

  constructor(dices: number[] | null) {
    if (!dices) {
      this.#diceValues = null;
    } else {
      this.#diceValues = [...dices];
    }
  }

  upper(target: number) {
    if (!this.#diceValues) return null;

    return this.#diceValues.filter((value) => value === target).length * target;
  }

  choice() {
    if (!this.#diceValues) return null;

    return this.#sum();
  }

  poker() {
    if (!this.#diceValues) return null;

    let result = 0;

    const x = { value: this.#diceValues[0], count: 0 };
    const y = { value: this.#diceValues[1], count: 0 };

    let sum = 0;
    this.#diceValues.forEach((value) => {
      sum += value;

      if (value === x.value) {
        x.count++;
        return;
      }
      if (value === y.value) {
        y.count++;
        return;
      }
    });

    if (x.count >= 4 || y.count >= 4) {
      result = sum;
    }

    return result;
  }

  fullHouse() {
    if (!this.#diceValues) return null;

    const diceValuesCount = this.#getDiceValuesCount();

    if (diceValuesCount.includes(2) && diceValuesCount.includes(3)) {
      return this.#sum();
    }
    if (diceValuesCount.includes(5)) {
      return this.#sum();
    }
    return 0;
  }

  smallStraight() {
    if (!this.#diceValues) return null;

    const diceValuesCount = this.#getDiceValuesCount();

    if (
      diceValuesCount[0] >= 1 &&
      diceValuesCount[1] >= 1 &&
      diceValuesCount[2] >= 1 &&
      diceValuesCount[3] >= 1
    ) {
      return 15;
    }
    if (
      diceValuesCount[1] >= 1 &&
      diceValuesCount[2] >= 1 &&
      diceValuesCount[3] >= 1 &&
      diceValuesCount[4] >= 1
    ) {
      return 15;
    }
    if (
      diceValuesCount[2] >= 1 &&
      diceValuesCount[3] >= 1 &&
      diceValuesCount[4] >= 1 &&
      diceValuesCount[5] >= 1
    ) {
      return 15;
    }
    return 0;
  }

  largeStraight() {
    if (!this.#diceValues) return null;

    if (JSON.stringify(this.#diceValues) === JSON.stringify([1, 2, 3, 4, 5])) {
      return 30;
    }
    if (JSON.stringify(this.#diceValues) === JSON.stringify([2, 3, 4, 5, 6])) {
      return 30;
    }
    return 0;
  }

  yacht() {
    if (!this.#diceValues) return null;

    const diceValuesCount = this.#getDiceValuesCount();

    if (diceValuesCount.includes(5)) {
      return 50;
    }
    return 0;
  }

  #sum() {
    if (!this.#diceValues) return null;

    return this.#diceValues.reduce((sum, value) => sum + value, 0);
  }

  #getDiceValuesCount() {
    if (!this.#diceValues) return new Array(6).fill(0) as number[];

    const diceValuesCountMap = new Map([
      [1, 0],
      [2, 0],
      [3, 0],
      [4, 0],
      [5, 0],
      [6, 0],
    ]);

    this.#diceValues.forEach((value) => {
      diceValuesCountMap.set(
        value,
        (diceValuesCountMap.get(value) as number) + 1
      );
    });

    return Array.from(diceValuesCountMap.values());
  }
}
