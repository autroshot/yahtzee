import { DiceProps } from '../types/props';
import DiceImage from './DiceImage';

export default function Dice(props: DiceProps) {
  return (
    <button
      className="dice"
      data-cy-value={props.value}
      data-selected={props.selected ? '' : null}
      onClick={props.onDiceClick}
    >
      <DiceImage value={props.value} />
    </button>
  );
}
