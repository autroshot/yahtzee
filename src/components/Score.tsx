import { ScoreProps } from '../types/props';

export default function Score(props: ScoreProps) {
  return (
    <tr
      className={props.isDecided ? 'decided-score' : 'not-decided-score'}
      tabIndex={0}
      onClick={props.onScoreClick}
      onKeyDown={triggerClickWhenEnterOrSpacebarKeyDown}
    >
      <td>{props.names.displayedName}</td>
      <td>
        <span data-cy={props.names.cyName}>{props.scoreValue}</span>
      </td>
    </tr>
  );

  function triggerClickWhenEnterOrSpacebarKeyDown(
    e: React.KeyboardEvent<HTMLElement>
  ) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.currentTarget.click();
    }
  }
}
