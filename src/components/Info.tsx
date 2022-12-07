import { Col, Row } from 'react-bootstrap';
import { InfoProps } from '../types/props';

export default function Info(props: InfoProps) {
  let instruction = '';
  switch (props.rollCount) {
    case 0:
      instruction = '주사위를 굴리세요.';
      break;
    case 1:
    case 2:
      instruction = '주사위를 다시 굴리거나 점수를 선택하세요.';
      break;
    case 3:
      instruction = '점수를 선택하세요.';
      break;
  }

  return (
    <>
      <Row>
        <Col>
          <a
            className="game-rule"
            href="https://youtu.be/yXno1hggmbw"
            target="_blank"
            rel="noreferrer"
          >
            게임 룰 영상
          </a>
        </Col>
      </Row>
      <Row>
        <Col>
          라운드: <span data-cy="round">{props.round}</span>/12
        </Col>
      </Row>
      <Row>
        <Col>
          굴린 횟수: <span data-cy="roll-count">{props.rollCount}</span>/3
        </Col>
      </Row>
      <Row>
        <Col className="instruction-box">
          <span className="instruction-text" data-cy="instruction">
            {instruction}
          </span>
        </Col>
      </Row>
    </>
  );
}
