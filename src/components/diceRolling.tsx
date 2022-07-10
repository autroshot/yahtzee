import { Button, Col, Row } from 'react-bootstrap';
import { DiceRollingProps } from '../types/props';
import Dice from './Dice';

export default function DiceRolling(props: DiceRollingProps) {
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
          {props.rolledDices?.map((dice) => (
            <Dice key={dice.key} value={dice.value} />
          ))}
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
          <Dice value={6} />
          <Dice value={3} />
          <Dice value={5} />
          <Dice value={6} />
          <Dice value={2} />
          <Dice value={1} />
        </Col>
      </Row>
    </>
  );
}
