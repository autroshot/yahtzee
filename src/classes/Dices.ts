import { Dice } from '../types/dice';

export default class Dices {
  #dices: Dice[] | null;

  constructor(dices: Dice[] | null) {
    if (!dices) {
      this.#dices = null;
    } else {
      this.#dices = [...dices];
    }
  }

  rollDices() {
    if (this.#dices === null) return this.#createInitialDices();
    return this.#dices
      .map((dice) => {
        if (dice.kept) return dice;
        return {
          key: dice.key,
          value: this.#getRandomDiceValue(),
          kept: false,
          selected: false,
        };
      })
      .sort((a, b) => a.value - b.value);
  }

  toggleDiceSelected(key: number) {
    if (!this.#dices) return null;

    const result = [...this.#dices];

    for (let i = 0; i < result.length; i++) {
      if (result[i].key !== key) continue;

      result[i].selected = !result[i].selected;
      break;
    }

    return result;
  }

  changeKeptOfSelectedDices(kept: boolean) {
    if (!this.#dices) return null;

    return this.#dices.map((dice) => {
      if (!dice.selected) return dice;

      dice.kept = kept;
      dice.selected = false;
      return dice;
    });
  }

  getKeptOfSelectedDice() {
    if (!this.#dices) return null;

    const foundDice = this.#dices.find((dice) => dice.selected) as Dice;

    return foundDice.kept;
  }

  getDeselectedOtherDices(key: number): Dice[] | null {
    if (!this.#dices) return null;

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

  #createInitialDices() {
    const result: Dice[] = [];

    for (let i = 1; i <= 5; i++) {
      result.push({
        key: i,
        value: this.#getRandomDiceValue(),
        kept: false,
        selected: false,
      });
    }
    result.sort((a, b) => a.value - b.value);

    return result;
  }

  #getRandomDiceValue() {
    return Math.floor(1 + Math.random() * 6);
  }
}
