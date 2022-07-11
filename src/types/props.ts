import { Dice } from './dice';

export interface DiceRollingProps {
  rolledDices: Dice[] | undefined;
  keptDices: Dice[] | undefined;
  onRollDicesClick: () => void;
}

export interface DiceProps {
  value: number;
}

export interface InfoProps {
  rollCount: number;
}
