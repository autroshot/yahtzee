import { Dice } from './dice';

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
  diceValues: number[] | null;
}

export interface ScoreProps {
  displayedScoreName: string;
  cyName: string;
  scoreValue: number | null;
  isDecided: boolean;
  onScoreClick: () => void;
}
