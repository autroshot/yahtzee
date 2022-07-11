import { Dice } from './dice';

export interface DiceRollingProps {
  rolledDices: Dice[] | undefined;
  keptDices: Dice[] | undefined;
  selectedDices: Dice[] | undefined;
  onRollDicesClick: () => void;
}

export interface DiceProps {
  value: number;
  selected: boolean | undefined;
}

export interface InfoProps {
  rollCount: number;
}
