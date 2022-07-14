import { useState } from 'react';
import { Col, Row, Table } from 'react-bootstrap';
import CalculateScore from '../classes/CalculateScore';
import { ScoreCardProps } from '../types/props';
import { Scores } from '../types/scores';
import {
  calculateBonus,
  calculateTotal,
  calculateUpperTotal,
  createInitialScores,
} from '../utils/score';

export default function ScoreCard(props: ScoreCardProps) {
  const [scores, setScores] = useState<Scores>(createInitialScores());
  console.log(scores);
  const diceValues = props.diceValues;

  const calculateScore = diceValues ? new CalculateScore(diceValues) : null;

  return (
    <>
      <Row>
        <Col sm="auto">
          <Table bordered>
            <tbody>
              <tr
                className={
                  scores.ace === null ? 'not-decided-score' : undefined
                }
                onClick={
                  calculateScore
                    ? () => handleScoreClick('ace', calculateScore.upper(1))
                    : undefined
                }
              >
                <td>에이스</td>
                <td>
                  <span data-cy="ace">
                    {scores.ace ??
                      (calculateScore ? calculateScore.upper(1) : null)}
                  </span>
                </td>
              </tr>
              <tr
                className={
                  scores.dual === null ? 'not-decided-score' : undefined
                }
              >
                <td>듀얼</td>
                <td>
                  <span data-cy="dual">
                    {scores.dual ??
                      (calculateScore ? calculateScore.upper(2) : null)}
                  </span>
                </td>
              </tr>
              <tr
                className={
                  scores.triple === null ? 'not-decided-score' : undefined
                }
              >
                <td>트리플</td>
                <td>
                  <span data-cy="triple">
                    {scores.triple ??
                      (calculateScore ? calculateScore.upper(3) : null)}
                  </span>
                </td>
              </tr>
              <tr>
                <td>쿼드</td>
                <td>
                  <span data-cy="quad">
                    {scores.quad ??
                      (calculateScore ? calculateScore.upper(4) : null)}
                  </span>
                </td>
              </tr>
              <tr>
                <td>펜타</td>
                <td>
                  <span data-cy="penta">
                    {scores.penta ??
                      (calculateScore ? calculateScore.upper(5) : null)}
                  </span>
                </td>
              </tr>
              <tr>
                <td>헥사</td>
                <td>
                  <span data-cy="hexa">
                    {scores.hexa ??
                      (calculateScore ? calculateScore.upper(6) : null)}
                  </span>
                </td>
              </tr>
              <tr className="total-score">
                <td>상단 점수의 합이 63점 이상이라면</td>
                <td>
                  <span data-cy="upper-total">
                    {calculateUpperTotal(scores)}
                  </span>
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
                    {scores.poker ??
                      (calculateScore ? calculateScore.poker() : null)}
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
                    {scores.yacht ??
                      (calculateScore ? calculateScore.yacht() : null)}
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
        </Col>
      </Row>
    </>
  );

  function handleScoreClick(scoreName: string, scoreValue: number) {
    if (scores[scoreName] === null) {
      const scoresCopy = { ...scores };

      scoresCopy[scoreName] = scoreValue;

      setScores(scoresCopy);
    }
  }
}
