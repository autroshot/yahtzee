import { Dice } from './dice';

export interface DiceRollingProps {
  rolledDices: Dice[] | undefined;
}

export interface DiceProps {
  value: number;
}
