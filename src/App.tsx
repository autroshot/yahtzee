import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Info from './components/Info';
import ScoreCard from './components/ScoreCard';
import DiceRolling from './components/DiceRolling';
import { useState } from 'react';
import { Dice } from './types/dice';
import {
  changeKeptOfSelectedDices,
  createInitialDices,
  rollDices,
  sortDices,
  toggleDiceSelected,
  getKeptOfSelectedDice,
  getDeselectedOtherDices,
} from './utils/dice';
import { Scores } from './types/scores';
import { createInitialScores } from './utils/score';

export default function App() {
  const [rollCount, setRollCount] = useState(0);
  const [dices, setDices] = useState<Dice[]>();
  const [scores, setScores] = useState<Scores>(createInitialScores());

  return (
    <Container className="app">
      <Row>
        <Col>
          <h1>요트 다이스</h1>
        </Col>
      </Row>
      <Info rollCount={rollCount} />
      <DiceRolling
        dices={dices}
        onRollDicesClick={handleRollDicesClick}
        onDiceClick={handleDiceClick}
        onMoveDicesClick={handleMoveDicesClick}
      />
      <Row>
        <Col>
          <h3>점수표</h3>
        </Col>
      </Row>
      <ScoreCard scores={scores} />
    </Container>
  );

  function handleRollDicesClick() {
    if (!dices) {
      const initialDices = createInitialDices();

      setDices(sortDices(initialDices));
      setRollCount(rollCount + 1);
    } else if (dices.some((dice) => !dice.kept)) {
      const rolledDices = rollDices(dices);

      if (rollCount < 3) {
        setDices(sortDices(rolledDices));
        setRollCount(rollCount + 1);
      }
    }
  }

  function handleDiceClick(key: number) {
    if (!dices) return;
    if (dices.every((dice) => !dice.selected)) {
      setDices(toggleDiceSelected(key, dices));
      return;
    }

    const clickedDice = dices.find((dice) => dice.key === key) as Dice;
    if (clickedDice.kept !== getKeptOfSelectedDice(dices)) {
      setDices(getDeselectedOtherDices(key, dices));
      return;
    }

    setDices(toggleDiceSelected(key, dices));
  }

  function handleMoveDicesClick(direction: string) {
    if (!dices) return;

    switch (direction) {
      case 'up':
        setDices(changeKeptOfSelectedDices(false, dices));
        break;
      case 'down':
        setDices(changeKeptOfSelectedDices(true, dices));
        break;
    }
  }
}
