import { DiceProps } from '../types/props';

export default function Dice(props: DiceProps) {
  const src = `images/dice-${props.value}.png`;
  const alt = `주사위 ${props.value}`;

  return (
    <button className="dice">
      <img src={src} alt={alt} />
    </button>
  );
}
