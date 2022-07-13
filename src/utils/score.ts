import { Scores } from '../types/scores';

export function createInitialScores(): Scores {
  return {
    ace: 0,
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
    (scores.ace ?? 0) +
    (scores.dual ?? 0) +
    (scores.triple ?? 0) +
    (scores.quad ?? 0) +
    (scores.penta ?? 0) +
    (scores.hexa ?? 0)
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
