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
}
