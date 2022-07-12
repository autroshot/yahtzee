import { Dice } from '../types/dice';

export function createInitialDices() {
  const result: Dice[] = [];

  for (let i = 1; i <= 6; i++) {
    result.push({
      key: i,
      value: getRandomDiceValue(),
      kept: false,
      selected: false,
    });
  }

  return result;
}

export function getRandomDiceValue() {
  return Math.floor(1 + Math.random() * 6);
}

export function sortDices(dices: Dice[]): Dice[] {
  const result = [...dices];

  result.sort((a, b) => a.value - b.value);

  return result;
}
