import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Info from './components/Info';
import ScoreCard from './components/ScoreCard';
import DiceRolling from './components/DiceRolling';
import { useState } from 'react';
import { Dice } from './types/dice';
import {
  createInitialDices,
  getRandomDiceValue,
  sortDices,
} from './utils/dice';

export default function App() {
  const [rollCount, setRollCount] = useState(0);
  const [rolledDices, setRolledDices] = useState<Dice[]>();

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
    if (!rolledDices) {
      const dices = createInitialDices();

      setRolledDices(sortDices(dices));
    } else {
      const newRolledDices = rolledDices.map(function (dice): Dice {
        return { key: dice.key, value: getRandomDiceValue() };
      });

      setRolledDices(sortDices(newRolledDices));
    }
  }
}
