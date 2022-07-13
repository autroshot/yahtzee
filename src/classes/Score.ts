export default class Score {
  _diceValues: number[];

  constructor(dices: number[]) {
    this._diceValues = dices;
  }

  calculateUpper(target: number) {
    return this._diceValues.filter((value) => value === target).length * target;
  }
}
