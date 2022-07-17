import { Dice } from '../types/dice';

export default class RollDices {
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
