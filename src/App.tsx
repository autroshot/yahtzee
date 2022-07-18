import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Info from './components/Info';
import ScoreCard from './components/ScoreCard';
import DiceRolling from './components/DiceRolling';
import { useEffect, useState } from 'react';
import { Dice } from './types/dice';
import RollDices from './classes/RollDices';
import SelectDices from './classes/SelectDices';

export default function App() {
  const [round, setRound] = useState(1);
  const [rollCount, setRollCount] = useState(0);
  const [dices, setDices] = useState<Dice[] | null>(null);

  const rollDices = new RollDices(dices);

  useEffect(() => {
    if (round > 12) {
      window.scrollTo(0, 1e9);
    }
  });

  return (
    <Container className="app">
      <Row>
        <Col>
          <h1>요트 다이스</h1>
        </Col>
      </Row>
      {round > 12 ? null : (
        <>
          <Info round={round} rollCount={rollCount} />
          <DiceRolling
            dices={dices}
            onRollDicesClick={handleRollDicesClick}
            onDiceClick={handleDiceClick}
            onMoveDicesClick={handleMoveDicesClick}
          />
        </>
      )}
      <ScoreCard
        diceValues={dices ? dices.map((dice) => dice.value) : null}
        goNextRound={goNextRound}
      />
    </Container>
  );

  function handleRollDicesClick() {
    if (dices && (rollCount >= 3 || dices.every((dice) => dice.kept))) return;
    setDices(rollDices.roll());
    setRollCount(rollCount + 1);
  }

  function handleDiceClick(key: number) {
    if (!dices) return;

    const selectDices = new SelectDices(dices);
    if (dices.every((dice) => !dice.selected)) {
      setDices(selectDices.toggleSelected(key));
      return;
    }

    const clickedDice = dices.find((dice) => dice.key === key) as Dice;
    if (clickedDice.kept !== selectDices.getKeptOfSelectedDice()) {
      setDices(selectDices.getDeselectedDicesExceptTarget(key));
      return;
    }

    setDices(selectDices.toggleSelected(key));
  }

  function handleMoveDicesClick(direction: string) {
    if (!dices) return;

    const selectDices = new SelectDices(dices);
    switch (direction) {
      case 'toRolled':
        setDices(selectDices.changeKeptOfSelectedDices(false));
        break;
      case 'toKept':
        setDices(selectDices.changeKeptOfSelectedDices(true));
        break;
    }
  }

  function goNextRound() {
    setRound((prevRound) => prevRound + 1);
    setRollCount(0);
    setDices(null);
  }
}
