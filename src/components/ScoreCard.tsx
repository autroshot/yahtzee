import { Col, Row, Table } from 'react-bootstrap';
import { ScoreCardProps } from '../types/props';
import {
  calculateBonus,
  calculateTotal,
  calculateUpperTotal,
} from '../utils/score';

export default function ScoreCard(props: ScoreCardProps) {
  const scores = props.scores;

  return (
    <>
      <Row>
        <Col sm="auto">
          <Table bordered>
            <tbody>
              <tr>
                <td>에이스</td>
                <td>{scores.ace}</td>
              </tr>
              <tr>
                <td>듀얼</td>
                <td>{scores.dual}</td>
              </tr>
              <tr>
                <td>트리플</td>
                <td>{scores.triple}</td>
              </tr>
              <tr>
                <td>쿼드</td>
                <td>{scores.quad}</td>
              </tr>
              <tr>
                <td>펜타</td>
                <td>{scores.penta}</td>
              </tr>
              <tr>
                <td>헥사</td>
                <td>{scores.hexa}</td>
              </tr>
              <tr className="total-score">
                <td>상단 점수의 합이 63점 이상이라면</td>
                <td>
                  {calculateUpperTotal(scores)}
                  /63
                </td>
              </tr>
              <tr className="total-score">
                <td>상단 보너스 +35점</td>
                <td>{calculateBonus(scores)}</td>
              </tr>
              <tr>
                <td>초이스</td>
                <td>{scores.choice}</td>
              </tr>
              <tr>
                <td>포커</td>
                <td>{scores.poker}</td>
              </tr>
              <tr>
                <td>풀 하우스</td>
                <td>{scores.fullHouse}</td>
              </tr>
              <tr>
                <td>스몰 스트레이트</td>
                <td>{scores.smallStraight}</td>
              </tr>
              <tr>
                <td>라지 스트레이트</td>
                <td>{scores.largeStraight}</td>
              </tr>
              <tr>
                <td>요트</td>
                <td>{scores.yacht}</td>
              </tr>
              <tr className="total-score">
                <td>총점</td>
                <td>{calculateTotal(scores)}</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  );
}
