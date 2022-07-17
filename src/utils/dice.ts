import { Dice } from '../types/dice';

function createInitialDices() {
  const result: Dice[] = [];

  for (let i = 1; i <= 5; i++) {
    result.push({
      key: i,
      value: getRandomDiceValue(),
      kept: false,
      selected: false,
    });
  }
  result.sort((a, b) => a.value - b.value);

  return result;
}

export function getRandomDiceValue() {
  return Math.floor(1 + Math.random() * 6);
}

export function rollDices(dices: Dice[] | null) {
  if (dices === null) return createInitialDices();
  return dices
    .map(function (dice): Dice {
      if (dice.kept) return dice;
      return {
        key: dice.key,
        value: getRandomDiceValue(),
        kept: false,
        selected: false,
      };
    })
    .sort((a, b) => a.value - b.value);
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

export function getKeptOfSelectedDice(dices: Dice[]): boolean {
  const foundDice = dices.find((dice) => dice.selected) as Dice;

  return foundDice.kept;
}

export function getDeselectedOtherDices(key: number, dices: Dice[]): Dice[] {
  return dices.map((dice) => {
    if (dice.key !== key) {
      return {
        key: dice.key,
        value: dice.value,
        kept: dice.kept,
        selected: false,
      };
    } else {
      return {
        key: dice.key,
        value: dice.value,
        kept: dice.kept,
        selected: true,
      };
    }
  });
}
