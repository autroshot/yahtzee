import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Info from './components/Info';
import ScoreCard from './components/ScoreCard';
import DiceRolling from './components/DiceRolling';
import { useState } from 'react';
import { Dice } from './types/dice';
import { createInitialDices, rollDices, sortDices } from './utils/dice';

export default function App() {
  const [rollCount, setRollCount] = useState(0);
  const [dices, setDices] = useState<Dice[]>();

  return (
    <Container className="app">
      <Row>
        <Col>
          <h1>요트 다이스</h1>
        </Col>
      </Row>
      <Info rollCount={rollCount} />
      <DiceRolling dices={dices} onRollDicesClick={handleRollDicesClick} />
      <Row>
        <Col>
          <h3>점수표</h3>
        </Col>
      </Row>
      <ScoreCard />
    </Container>
  );

  function handleRollDicesClick() {
    if (!dices) {
      const dices = createInitialDices();

      setDices(sortDices(dices));
      setRollCount(rollCount + 1);
    } else {
      const rolledDices = rollDices(dices);

      if (rollCount < 3) {
        setDices(sortDices(rolledDices));
        setRollCount(rollCount + 1);
      }
    }
  }

  function handleDiceClick(key: number) {
    console.log(`#${key} dice clicked`);
  }
}
