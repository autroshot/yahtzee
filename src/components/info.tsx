import { Col, Row } from 'react-bootstrap';
import { InfoProps } from '../types/props';

export default function Info(props: InfoProps) {
  return (
    <>
      <Row>
        <Col>라운드: 1/12</Col>
      </Row>
      <Row>
        <Col>굴린 횟수: 0/3</Col>
      </Row>
      <Row>
        <Col>주사위를 굴리세요.</Col>
      </Row>
    </>
  );
}
