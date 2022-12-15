import { Button, Col, Row } from 'react-bootstrap';
import { DiceRollingProps } from '../types/props';
import Dices from './Dices';

export default function DiceRolling(props: DiceRollingProps) {
  const rolledDices = props.dices?.filter((dice) => !dice.kept);
  const keptDices = props.dices?.filter((dice) => dice.kept);

  return (
    <>
      <Row>
        <Col>
          <Button
            variant="secondary"
            className="action"
            disabled={props.rollCount === 3 ? true : false}
            onClick={props.onRollDicesClick}
          >
            주사위 굴리기
          </Button>
        </Col>
      </Row>
      <Row className="my-3">
        <Col>
          <Dices
            label="굴릴 주사위"
            dices={rolledDices}
            onDiceClick={props.onDiceClick}
            dataCy="rolled-dices"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Button
            variant="secondary"
            className="action"
            disabled={!Boolean(rolledDices?.find((dice) => dice.selected))}
            onClick={() => props.onMoveDicesClick('toKept')}
          >
            선택한 주사위 보관하기
          </Button>
          <Button
            variant="secondary"
            className="action"
            disabled={!Boolean(keptDices?.find((dice) => dice.selected))}
            onClick={() => props.onMoveDicesClick('toRolled')}
          >
            선택한 주사위 되돌리기
          </Button>
        </Col>
      </Row>
      <Row className="my-3">
        <Col>
          <Dices
            label="보관된 주사위"
            dices={keptDices}
            onDiceClick={props.onDiceClick}
            dataCy="kept-dices"
          />
        </Col>
      </Row>
    </>
  );
}
