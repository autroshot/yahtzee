import { useState } from 'react';
import { Col, Row, Table } from 'react-bootstrap';
import CalculateScore from '../classes/CalculateScore';
import CalculateTotalScore from '../classes/CalculateTotalScore';
import { ScoreCardProps } from '../types/props';
import { Scores } from '../types/scores';
import Score from './Score';
import ScoreEvaluation from './ScoreEvaluation';

export default function ScoreCard(props: ScoreCardProps) {
  const [scores, setScores] = useState<Scores>(createInitialScores());

  const calculateScore = new CalculateScore(props.diceValues);
  const calculateTotalScore = new CalculateTotalScore(scores);

  const UPPER_SCORE_NAMES_ARRAY = [
    { name: 'ace', displayedName: '에이스', cyName: 'ace' },
    { name: 'dual', displayedName: '듀얼', cyName: 'dual' },
    { name: 'triple', displayedName: '트리플', cyName: 'triple' },
    { name: 'quad', displayedName: '쿼드', cyName: 'quad' },
    { name: 'penta', displayedName: '펜타', cyName: 'penta' },
    { name: 'hexa', displayedName: '헥사', cyName: 'hexa' },
  ];
  const LOWER_SCORE_NAMES_ARRAY = [
    { name: 'choice', displayedName: '초이스', cyName: 'choice' },
    { name: 'poker', displayedName: '포커', cyName: 'poker' },
    { name: 'fullHouse', displayedName: '풀 하우스', cyName: 'full-house' },
    {
      name: 'smallStraight',
      displayedName: '스몰 스트레이트',
      cyName: 'small-straight',
    },
    {
      name: 'largeStraight',
      displayedName: '라지 스트레이트',
      cyName: 'large-straight',
    },
    { name: 'yacht', displayedName: '요트', cyName: 'yacht' },
  ];

  return (
    <>
      <Row>
        <Col>
          <h3>점수표</h3>
        </Col>
      </Row>
      <Row>
        <Col sm="auto">
          <Table bordered data-cy="scores">
            <tbody>
              {UPPER_SCORE_NAMES_ARRAY.map((scoreNames, index) => {
                const scoreValue = calculateScore.upper(index + 1);
                return (
                  <Score
                    key={scoreNames.name}
                    names={scoreNames}
                    scoreValue={scores[scoreNames.name] ?? scoreValue}
                    isDecided={scores[scoreNames.name] !== null ? true : false}
                    onScoreClick={() =>
                      handleScoreClick(scoreNames.name, scoreValue)
                    }
                  />
                );
              })}
              <tr className="total-score">
                <td>상단 점수의 합이 63점 이상이라면</td>
                <td className="score-value-col">
                  <span data-cy="upper-total">
                    {calculateTotalScore.upperTotal()}
                  </span>
                  /63
                </td>
              </tr>
              <tr className="total-score">
                <td>상단 보너스 +35점</td>
                <td>
                  <span data-cy="bonus">{calculateTotalScore.bonus()}</span>
                </td>
              </tr>
              {LOWER_SCORE_NAMES_ARRAY.map((scoreNames) => {
                const scoreValue = (
                  calculateScore[scoreNames.name] as () => number | null
                )();
                return (
                  <Score
                    key={scoreNames.name}
                    names={scoreNames}
                    scoreValue={scores[scoreNames.name] ?? scoreValue}
                    isDecided={scores[scoreNames.name] !== null ? true : false}
                    onScoreClick={() =>
                      handleScoreClick(scoreNames.name, scoreValue)
                    }
                  />
                );
              })}
              <tr className="total-score">
                <td>총점</td>
                <td>
                  <span data-cy="total">{calculateTotalScore.total()}</span>
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
      {Object.values(scores).includes(null) ? null : (
        <ScoreEvaluation total={calculateTotalScore.total()} />
      )}
    </>
  );

  function handleScoreClick(scoreName: string, scoreValue: number | null) {
    if (scoreValue === null) return;
    if (scores[scoreName] !== null) return;

    const scoresCopy = { ...scores };

    scoresCopy[scoreName] = scoreValue;

    setScores(scoresCopy);
    props.goNextRound();
  }

  function handleRestartClick() {}

  function createInitialScores() {
    return {
      ace: null,
      dual: null,
      triple: null,
      quad: null,
      penta: null,
      hexa: null,
      choice: null,
      poker: null,
      fullHouse: null,
      smallStraight: null,
      largeStraight: null,
      yacht: null,
    };
  }
}
