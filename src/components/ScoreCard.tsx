import { Col, Row, Table } from 'react-bootstrap';
import { ScoreCardProps } from '../types/props';
import {
  calculateBonus,
  calculateTotal,
  calculateUpperTotal,
} from '../utils/score';

export default function ScoreCard(props: ScoreCardProps) {
  const scores = props.scores;
  const diceValues = props.diceValues;

  return (
    <>
      <Row>
        <Col sm="auto">
          <Table bordered>
            <tbody>
              <tr>
                <td>에이스</td>
                <td>
                  <span data-cy="ace">{scores.ace}</span>
                </td>
              </tr>
              <tr>
                <td>듀얼</td>
                <td>
                  <span data-cy="dual">{scores.dual}</span>
                </td>
              </tr>
              <tr>
                <td>트리플</td>
                <td>
                  <span data-cy="triple">{scores.triple}</span>
                </td>
              </tr>
              <tr>
                <td>쿼드</td>
                <td>
                  <span data-cy="quad">{scores.quad}</span>
                </td>
              </tr>
              <tr>
                <td>펜타</td>
                <td>
                  <span data-cy="penta">{scores.penta}</span>
                </td>
              </tr>
              <tr>
                <td>헥사</td>
                <td>
                  <span data-cy="hexa">{scores.hexa}</span>
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
                  <span data-cy="choice">{scores.choice}</span>
                </td>
              </tr>
              <tr>
                <td>포커</td>
                <td>
                  <span data-cy="poker">{scores.poker}</span>
                </td>
              </tr>
              <tr>
                <td>풀 하우스</td>
                <td>
                  <span data-cy="full-house">{scores.fullHouse}</span>
                </td>
              </tr>
              <tr>
                <td>스몰 스트레이트</td>
                <td>
                  <span data-cy="small-straight">{scores.smallStraight}</span>
                </td>
              </tr>
              <tr>
                <td>라지 스트레이트</td>
                <td>
                  <span data-cy="large-straight">{scores.largeStraight}</span>
                </td>
              </tr>
              <tr>
                <td>요트</td>
                <td>
                  <span data-cy="yacht">{scores.yacht}</span>
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
}
