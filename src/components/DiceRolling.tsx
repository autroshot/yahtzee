import { Button, Col, Row } from 'react-bootstrap';
import { DiceRollingProps } from '../types/props';
import Dice from './Dice';

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
          <div className="dices-container p-2">
            <div className="dices-label">굴릴 주사위</div>
            <div className="my-1" data-cy="rolled-dices">
              {rolledDices?.map((dice) => (
                <Dice
                  key={dice.key}
                  value={dice.value}
                  selected={dice.selected}
                  onDiceClick={() => props.onDiceClick(dice.key)}
                />
              ))}
            </div>
          </div>
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
          <div className="dices-container p-2">
            <div className="dices-label">보관된 주사위</div>
            <div className="my-1" data-cy="kept-dices">
              {keptDices?.map((dice) => (
                <Dice
                  key={dice.key}
                  value={dice.value}
                  selected={dice.selected}
                  onDiceClick={() => props.onDiceClick(dice.key)}
                />
              ))}
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}
