export default class CalculateScore {
  _diceValues: number[];

  constructor(dices: number[]) {
    this._diceValues = dices;
  }

  upper(target: number) {
    return this._diceValues.filter((value) => value === target).length * target;
  }

  choice() {
    return this._sum();
  }

  poker() {
    let result = 0;

    const x = { value: this._diceValues[0], count: 0 };
    const y = { value: this._diceValues[1], count: 0 };

    let sum = 0;
    this._diceValues.forEach((value) => {
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
    const diceValuesCount = this._getDiceValuesCount();

    if (diceValuesCount.includes(2) && diceValuesCount.includes(3)) {
      return this._sum();
    }
    if (diceValuesCount.includes(5)) {
      return this._sum();
    }
    return 0;
  }

  smallStraight() {
    const diceValuesCount = this._getDiceValuesCount();

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

  _sum() {
    return this._diceValues.reduce((sum, value) => sum + value, 0);
  }

  _getDiceValuesCount() {
    const diceValuesCountMap = new Map([
      [1, 0],
      [2, 0],
      [3, 0],
      [4, 0],
      [5, 0],
      [6, 0],
    ]);

    this._diceValues.forEach((value) => {
      diceValuesCountMap.set(
        value,
        (diceValuesCountMap.get(value) as number) + 1
      );
    });

    return Array.from(diceValuesCountMap.values());
  }
}
