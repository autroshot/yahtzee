import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Info from './components/info';
import ScoreCard from './components/scoreCard';
import DiceRolling from './components/diceRolling';

export default function App() {
  return (
    <Container className="app">
      <Row>
        <Col>
          <h1>요트 다이스</h1>
        </Col>
      </Row>
      <Info></Info>
      <DiceRolling></DiceRolling>
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
