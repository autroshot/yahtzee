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
        <Col>라운드: 1/12</Col>
      </Row>
      <Row>
        <Col>굴린 횟수: {props.rollCount}/3</Col>
      </Row>
      <Row>
        <Col>{instruction}</Col>
      </Row>
    </>
  );
}
