import { Col, Row, Table } from 'react-bootstrap';
import { ScoreCardProps } from '../types/props';

export default function ScoreCard(props: ScoreCardProps) {
  const scores = props.scores;
  const upperTotal =
    scores.aces +
    scores.dual +
    scores.triple +
    scores.quad +
    scores.penta +
    scores.hexa;
  const bonus = upperTotal >= 65 ? 35 : 0;

  return (
    <>
      <Row>
        <Col sm="auto">
          <Table bordered>
            <tbody>
              <tr>
                <td>에이스</td>
                <td>{scores.aces}</td>
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
                  {upperTotal}
                  /63
                </td>
              </tr>
              <tr className="total-score">
                <td>상단 보너스 +35점</td>
                <td>{upperTotal >= 65 ? 35 : 0}</td>
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
                <td>0</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  );
}
