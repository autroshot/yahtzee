import { Scores } from '../types/scores';

export function createInitialScores(): Scores {
  return {
    ace: null,
    dual: null,
    triple: null,
    quad: null,
    penta: null,
    hexa: null,
    choice: null,
    poker: null,
    fullHouse: null,
    smallStraight: null,
    largeStraight: null,
    yacht: null,
  };
}
