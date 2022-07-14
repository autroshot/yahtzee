import { useState } from 'react';
import { Table } from 'react-bootstrap';
import CalculateScore from '../classes/CalculateScore';
import { ScoreCardProps } from '../types/props';
import { Scores } from '../types/scores';
import {
  calculateBonus,
  calculateTotal,
  calculateUpperTotal,
  createInitialScores,
} from '../utils/score';
import Score from './Score';

export default function ScoreCard(props: ScoreCardProps) {
  const [scores, setScores] = useState<Scores>(createInitialScores());

  const calculateScore = new CalculateScore(props.diceValues);
  const upperScoreNamesArray = [
    { name: 'ace', displayedName: '에이스', cyName: 'ace' },
    { name: 'dual', displayedName: '듀얼', cyName: 'dual' },
    { name: 'triple', displayedName: '트리플', cyName: 'triple' },
    { name: 'quad', displayedName: '쿼드', cyName: 'quad' },
    { name: 'penta', displayedName: '펜타', cyName: 'penta' },
    { name: 'hexa', displayedName: '헥사', cyName: 'hexa' },
  ];
  const lowerScoreParams = [
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
    <Table bordered>
      <tbody>
        {upperScoreNamesArray.map((scoreNames, index) => {
          const scoreValue = calculateScore.upper(index + 1);

          return (
            <Score
              key={scoreNames.name}
              names={scoreNames}
              scoreValue={scores[scoreNames.name] ?? scoreValue}
              isDecided={scores[scoreNames.name] ? true : false}
              onScoreClick={() => handleScoreClick(scoreNames.name, scoreValue)}
            />
          );
        })}
        <tr className="total-score">
          <td>상단 점수의 합이 63점 이상이라면</td>
          <td>
            <span data-cy="upper-total">{calculateUpperTotal(scores)}</span>
            /63
          </td>
        </tr>
        <tr className="total-score">
          <td>상단 보너스 +35점</td>
          <td>
            <span data-cy="bonus">{calculateBonus(scores)}</span>
          </td>
        </tr>
        <tr>
          <td>초이스</td>
          <td>
            <span data-cy="choice">
              {scores.choice ??
                (calculateScore ? calculateScore.choice() : null)}
            </span>
          </td>
        </tr>
        <tr>
          <td>포커</td>
          <td>
            <span data-cy="poker">
              {scores.poker ?? (calculateScore ? calculateScore.poker() : null)}
            </span>
          </td>
        </tr>
        <tr>
          <td>풀 하우스</td>
          <td>
            <span data-cy="full-house">
              {scores.fullHouse ??
                (calculateScore ? calculateScore.fullHouse() : null)}
            </span>
          </td>
        </tr>
        <tr>
          <td>스몰 스트레이트</td>
          <td>
            <span data-cy="small-straight">
              {scores.smallStraight ??
                (calculateScore ? calculateScore.smallStraight() : null)}
            </span>
          </td>
        </tr>
        <tr>
          <td>라지 스트레이트</td>
          <td>
            <span data-cy="large-straight">
              {scores.largeStraight ??
                (calculateScore ? calculateScore.largeStraight() : null)}
            </span>
          </td>
        </tr>
        <tr>
          <td>요트</td>
          <td>
            <span data-cy="yacht">
              {scores.yacht ?? (calculateScore ? calculateScore.yacht() : null)}
            </span>
          </td>
        </tr>
        <tr className="total-score">
          <td>총점</td>
          <td>
            <span data-cy="total">{calculateTotal(scores)}</span>
          </td>
        </tr>
      </tbody>
    </Table>
  );

  function handleScoreClick(scoreName: string, scoreValue: number | null) {
    if (!scoreValue) return;
    if (scores[scoreName] !== null) return;

    const scoresCopy = { ...scores };

    scoresCopy[scoreName] = scoreValue;

    setScores(scoresCopy);
  }
}
