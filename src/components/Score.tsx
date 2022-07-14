import { ScoreProps } from '../types/props';

export default function Score(props: ScoreProps) {
  return (
    <tr
      className={props.isDecided ? undefined : 'not-decided-score'}
      onClick={props.onScoreClick}
    >
      <td>{props.displayedName}</td>
      <td>
        <span data-cy={props.cyName}>{props.scoreValue}</span>
      </td>
    </tr>
  );
}
