import { DicesProps } from '../types/props';
import Dice from './Dice';

export default function Dices(props: DicesProps) {
  return (
    <div className="dices-container p-2">
      <div className="dices-label">{props.label}</div>
      <div className="my-1" data-cy={props.dataCy}>
        {props.dices?.map((dice) => (
          <Dice
            key={dice.key}
            value={dice.value}
            selected={dice.selected}
            onDiceClick={() => props.onDiceClick(dice.key)}
          />
        ))}
      </div>
    </div>
  );
}
