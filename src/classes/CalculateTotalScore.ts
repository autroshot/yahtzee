import { Scores } from '../types/scores';

export default class CalculateTotalScore {
  #scores: Scores;

  constructor(scores: Scores) {
    this.#scores = scores;
  }

  upperTotal() {
    return (
      (this.#scores.ace ?? 0) +
      (this.#scores.dual ?? 0) +
      (this.#scores.triple ?? 0) +
      (this.#scores.quad ?? 0) +
      (this.#scores.penta ?? 0) +
      (this.#scores.hexa ?? 0)
    );
  }

  bonus() {
    if (this.upperTotal() >= 63) {
      return 35;
    } else {
      return 0;
    }
  }

  total() {
    let result = 0;

    result += Object.values(this.#scores).reduce((sum, score) => {
      return (sum as number) + (score ?? 0);
    }, 0) as number;
    result += this.bonus();

    return result;
  }
}
