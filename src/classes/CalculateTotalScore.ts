import { Scores } from '../types/scores';

export default class CalculateTotalScore {
  #scores: Scores;

  constructor(scores: Scores) {
    this.#scores = scores;
  }
}
