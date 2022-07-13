import { Scores } from '../types/scores';

export function createInitialScores(): Scores {
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

export function calculateUpperTotal(scores: Scores) {
  return (
    scores.aces +
    scores.dual +
    scores.triple +
    scores.quad +
    scores.penta +
    scores.hexa
  );
}

export function calculateBonus(scores: Scores) {
  if (calculateUpperTotal(scores) >= 65) {
    return 35;
  } else {
    return 0;
  }
}

export function calculateTotal(scores: Scores) {
  let result = 0;

  result += Object.values(scores).reduce((total, score) => {
    return total + score;
  }, 0);

  result += calculateBonus(scores);

  return result;
}
