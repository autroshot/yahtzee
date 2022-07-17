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
}
