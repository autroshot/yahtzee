import { Button } from 'react-bootstrap';
import { ScoreProps } from '../types/props';

export default function Score(props: ScoreProps) {
  return (
    <tr className={props.isDecided ? 'decided-score' : undefined}>
      <td>{props.names.displayedName}</td>
      <td>
        <span data-cy={props.names.cyName}>{props.scoreValue}</span>
      </td>
      <td className="select-button-td">
        {props.isDecided ? (
          '선택 완료'
        ) : (
          <Button
            variant="secondary"
            size="sm"
            disabled={props.scoreValue === null}
            onClick={props.onScoreClick}
            data-cy={`select-${props.names.cyName}`}
          >
            선택하기
          </Button>
        )}
      </td>
    </tr>
  );
}
