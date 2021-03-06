import { DiceProps } from '../types/props';

export default function Dice(props: DiceProps) {
  return (
    <button
      className="dice"
      data-cy-value={props.value}
      data-selected={props.selected ? '' : null}
      onClick={props.onDiceClick}
    >
      <img
        src={`images/dice-${props.value}.png`}
        alt={`주사위 ${props.value}`}
      />
    </button>
  );
}
