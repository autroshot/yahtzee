import { Dice } from './dice';

export interface DiceRollingProps {
  dices: Dice[] | undefined;
  onRollDicesClick: () => void;
  onDiceClick: (key: number) => void;
}

export interface DiceProps {
  value: number;
  selected: boolean | undefined;
  onDiceClick: () => void;
}

export interface InfoProps {
  rollCount: number;
}
