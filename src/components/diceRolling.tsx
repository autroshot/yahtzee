import { Button, Col, Row } from 'react-bootstrap';
import { DiceRollingProps } from '../types/props';
import Dice from './Dice';

export default function DiceRolling(props: DiceRollingProps) {
  const keptDices = props.dices?.filter((dice) => dice.kept);

  return (
    <>
      <Row>
        <Col>
          <Button
            variant="secondary"
            className="action"
            onClick={props.onRollDicesClick}
          >
            주사위 굴리기
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <span>굴릴 주사위:</span>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="dices-container" data-cy="rolled-dices">
            {props.dices?.map((dice) => (
              <Dice
                key={dice.key}
                value={dice.value}
                selected={dice.selected}
              />
            ))}
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button variant="secondary" className="action">
            선택된 주사위 내리기
          </Button>
          <Button variant="secondary" className="action">
            선택된 주사위 올리기
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <span>보관된 주사위:</span>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="dices-container" data-cy="kept-dices">
            {keptDices?.map((dice) => (
              <Dice
                key={dice.key}
                value={dice.value}
                selected={dice.selected}
              />
            ))}
          </div>
        </Col>
      </Row>
    </>
  );
}
