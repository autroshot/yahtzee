import { Dice } from '../types/dice';

export default class SelectDices {
  #dices: Dice[];

  constructor(dices: Dice[]) {
    this.#dices = [...dices];
  }

  toggleSelectedOfSelectedDice(key: number) {
    const result = [...this.#dices];

    for (let i = 0; i < result.length; i++) {
      if (result[i].key !== key) continue;

      result[i].selected = !result[i].selected;
      break;
    }

    return result;
  }

  changeKeptOfSelectedDices(kept: boolean) {
    return this.#dices.map((dice) => {
      if (!dice.selected) return dice;

      dice.kept = kept;
      dice.selected = false;
      return dice;
    });
  }

  getKeptOfSelectedDice() {
    const foundDice = this.#dices.find((dice) => dice.selected) as Dice;
    return foundDice.kept;
  }

  getDeselectedDicesExceptTarget(key: number): Dice[] {
    return this.#dices.map((dice) => {
      if (dice.key !== key) {
        return {
          key: dice.key,
          value: dice.value,
          kept: dice.kept,
          selected: false,
        };
      } else {
        return {
          key: dice.key,
          value: dice.value,
          kept: dice.kept,
          selected: true,
        };
      }
    });
  }
}
