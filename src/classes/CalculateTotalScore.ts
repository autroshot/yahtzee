import { Scores } from '../types/scores';

export default class CalculateTotalScore {
  #scores: Scores;

  constructor(scores: Scores) {
    this.#scores = scores;
  }

  upperTotal(scores: Scores) {
    return (
      (scores.ace ?? 0) +
      (scores.dual ?? 0) +
      (scores.triple ?? 0) +
      (scores.quad ?? 0) +
      (scores.penta ?? 0) +
      (scores.hexa ?? 0)
    );
  }

  bonus(scores: Scores) {
    if (this.upperTotal(scores) >= 63) {
      return 35;
    } else {
      return 0;
    }
  }

  total(scores: Scores) {
    let result = 0;

    result += Object.values(scores).reduce((sum, score) => {
      return (sum as number) + (score ?? 0);
    }, 0) as number;
    result += this.bonus(scores);

    return result;
  }
}
