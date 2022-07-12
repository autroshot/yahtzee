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

export function rollDices(dices: Dice[]) {
  return dices.map(function (dice): Dice {
    if (dice.kept) return dice;
    return {
      key: dice.key,
      value: getRandomDiceValue(),
      kept: false,
      selected: false,
    };
  });
}

export function toggleDiceSelected(key: number, dices: Dice[]) {
  const result = [...dices];

  for (let i = 0; i < result.length; i++) {
    if (result[i].key !== key) continue;

    result[i].selected = !result[i].selected;
    break;
  }

  return result;
}

export function changeKeptOfSelectedDices(kept: boolean, dices: Dice[]) {
  return dices.map((dice) => {
    if (!dice.selected) return dice;

    dice.kept = kept;
    dice.selected = false;
    return dice;
  });
}
