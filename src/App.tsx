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
  toggleDiceSelected,
  getKeptOfSelectedDice,
  getDeselectedOtherDices,
} from './utils/dice';
import RollDices from './classes/RollDices';

export default function App() {
  const [round, setRound] = useState(1);
  const [rollCount, setRollCount] = useState(0);
  const [dices, setDices] = useState<Dice[] | null>(null);

  const rollDices = new RollDices(dices);

  return (
    <Container className="app">
      <Row>
        <Col>
          <h1>요트 다이스</h1>
        </Col>
      </Row>
      <Info round={round} rollCount={rollCount} />
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
      <Row>
        <Col sm="auto">
          <ScoreCard
            diceValues={dices ? dices.map((dice) => dice.value) : null}
            goNextRound={goNextRound}
          />
        </Col>
      </Row>
    </Container>
  );

  function handleRollDicesClick() {
    if (dices && (rollCount >= 3 || dices.every((dice) => dice.kept))) return;
    setDices(rollDices.roll());
    setRollCount(rollCount + 1);
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

  function goNextRound() {
    setRound((prevRound) => prevRound + 1);
    setRollCount(0);
    setDices(null);
  }
}
