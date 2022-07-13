import { Scores } from '../types/scores';

export default class Score {
  static createInitialScores(): Scores {
    return {
      aces: 0,
      dual: 0,
      triple: 0,
      quad: 0,
      penta: 0,
      hexa: 0,
      choice: 0,
      poker: 0,
      fullHouse: 0,
      smallStraight: 0,
      largeStraight: 0,
      yacht: 0,
    };
  }
}
