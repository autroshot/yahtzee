import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Info from './components/info';
import RollDices from './components/rollDices';
import ScoreCard from './components/scoreCard';

export default function App() {
  return (
    <Container>
      <Row>
        <Col>
          <h1>요트 다이스</h1>
        </Col>
      </Row>
      <Info></Info>
      <RollDices></RollDices>
      <Row>
        <Col>
          <h3>점수표</h3>
        </Col>
      </Row>
      <ScoreCard></ScoreCard>
    </Container>
  );
}

// function getRandonDiceValue() {
//   return Math.floor(1 + Math.random() * 6);
// }
