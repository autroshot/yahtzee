import { ScoreProps } from '../types/props';

export default function Score(props: ScoreProps) {
  return (
    <tr
      className={props.isDecided ? undefined : 'not-decided-score'}
      onClick={props.onScoreClick}
    >
      <td>{props.names.displayedName}</td>
      <td>
        <span data-cy={props.names.cyName}>{props.scoreValue}</span>
      </td>
    </tr>
  );
}
