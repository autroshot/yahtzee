import { Dice } from './dice';
import { Scores } from './scores';

export interface DiceRollingProps {
  dices: Dice[] | null;
  onRollDicesClick: () => void;
  onDiceClick: (key: number) => void;
  onMoveDicesClick: (direction: string) => void;
}

export interface DiceProps {
  value: number;
  selected: boolean | undefined;
  onDiceClick: () => void;
}

export interface InfoProps {
  rollCount: number;
}

export interface ScoreCardProps {
  scores: Scores;
}
