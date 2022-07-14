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
  if (calculateUpperTotal(scores) >= 63) {
    return 35;
  } else {
    return 0;
  }
}

export function calculateTotal(scores: Scores) {
  let result = 0;

  result += Object.values(scores).reduce((sum, score) => {
    return (sum as number) + (score ?? 0);
  }, 0) as number;

  result += calculateBonus(scores);

  return result;
}
