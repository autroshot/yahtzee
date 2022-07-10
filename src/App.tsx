import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Info from './components/Info';
import ScoreCard from './components/ScoreCard';
import DiceRolling from './components/DiceRolling';
import { useState } from 'react';

export default function App() {
  const [rolledDices, setRolledDices] = useState<number[]>([5, 2, 3, 3, 1, 6]);

  return (
    <Container className="app">
      <Row>
        <Col>
          <h1>요트 다이스</h1>
        </Col>
      </Row>
      <Info />
      <DiceRolling
        rolledDices={rolledDices}
        onRollDicesClick={handleRollDicesClick}
      />
      <Row>
        <Col>
          <h3>점수표</h3>
        </Col>
      </Row>
      <ScoreCard />
    </Container>
  );

  function handleRollDicesClick() {
    console.log('handleRollDicesClick');
  }
}

// function getRandonDiceValue() {
//   return Math.floor(1 + Math.random() * 6);
// }
