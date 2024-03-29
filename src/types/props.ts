import { Dice } from './dice';

export interface DiceRollingProps {
  dices: Dice[] | null;
  rollCount: number;
  onRollDicesClick: () => void;
  onDiceClick: (key: number) => void;
  onMoveDicesClick: (direction: string) => void;
}

export interface DiceProps {
  value: number;
  selected: boolean | undefined;
  onDiceClick: () => void;
}

export interface DiceImageProps {
  value: number;
}

export interface InfoProps {
  round: number;
  rollCount: number;
}

export interface ScoreCardProps {
  diceValues: number[] | null;
  goNextRound: () => void;
  goFirstRound: () => void;
}

export interface ScoreProps {
  names: Names;
  scoreValue: number | null;
  isDecided: boolean;
  onScoreClick: () => void;
}

interface Names {
  name: string;
  displayedName: string;
  cyName: string;
}

export interface ScoreEvaluationProps {
  total: number;
  onRestartClick: () => void;
}

export interface DicesProps {
  label: string;
  dices: Dice[] | undefined;
  onDiceClick: (key: number) => void;
  dataCy: string;
}
