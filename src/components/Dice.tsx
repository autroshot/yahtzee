import { DiceProps } from '../types/props';

export default function Dice(props: DiceProps) {
  return (
    <button className="dice" data-cy-value={props.value}>
      <img
        src={`images/dice-${props.value}.png`}
        alt={`주사위 ${props.value}`}
      />
    </button>
  );
}
