import { Dice } from './dice';

export interface DiceRollingProps {
  dices: Dice[] | undefined;
  onRollDicesClick: () => void;
}

export interface DiceProps {
  value: number;
  selected: boolean | undefined;
}

export interface InfoProps {
  rollCount: number;
}
