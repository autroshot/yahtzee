export default class CalculateScore {
  _diceValues: number[];

  constructor(dices: number[]) {
    this._diceValues = dices;
  }

  upper(target: number) {
    return this._diceValues.filter((value) => value === target).length * target;
  }

  choice() {
    return this._diceValues.reduce((sum, value) => sum + value, 0);
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
}
