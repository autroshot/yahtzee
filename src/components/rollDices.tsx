import { Button, Col, Row, Image } from 'react-bootstrap';

export default function RollDices() {
  return (
    <>
      <Row>
        <Col>
          <Button>주사위 굴리기</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <button className="diceButton">
            <img src="images/dice-1.png" alt="주사위 1" />
          </button>
          <button className="diceButton">
            <img src="images/dice-2.png" alt="주사위 2" />
          </button>
          <button className="diceButton">
            <img src="images/dice-3.png" alt="주사위 3" />
          </button>
          <button className="diceButton">
            <img src="images/dice-4.png" alt="주사위 4" />
          </button>
          <button className="diceButton">
            <img src="images/dice-5.png" alt="주사위 5" />
          </button>
          <button className="diceButton">
            <img src="images/dice-6.png" alt="주사위 6" />
          </button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button>주사위 내리기</Button>
          <Button>주사위 올리기</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          보관된 주사위:
          <button className="diceButton">
            <img src="images/dice-1.png" alt="주사위 1" />
          </button>
          <button className="diceButton">
            <img src="images/dice-2.png" alt="주사위 2" />
          </button>
          <button className="diceButton">
            <img src="images/dice-3.png" alt="주사위 3" />
          </button>
          <button className="diceButton">
            <img src="images/dice-4.png" alt="주사위 4" />
          </button>
          <button className="diceButton">
            <img src="images/dice-5.png" alt="주사위 5" />
          </button>
          <button className="diceButton">
            <img src="images/dice-6.png" alt="주사위 6" />
          </button>
        </Col>
      </Row>
    </>
  );
}
