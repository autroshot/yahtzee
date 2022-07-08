import { Button, Col, Row } from 'react-bootstrap';

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
          <Button>1</Button>
          <Button>1</Button>
          <Button>1</Button>
          <Button>1</Button>
          <Button>1</Button>
          <Button>1</Button>
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
          <Button>1</Button>
          <Button>1</Button>
          <Button>1</Button>
          <Button>1</Button>
          <Button>1</Button>
          <Button>1</Button>
        </Col>
      </Row>
    </>
  );
}
