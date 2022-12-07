import { Col, Row } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer className="py-3">
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
          <a
            href="https://github.com/autroshot/yahtzee"
            target="_blank"
            rel="noreferrer"
          >
            <svg className="gitHubIcon" aria-label="깃허브" />
          </a>
        </Col>
      </Row>
    </footer>
  );
}
