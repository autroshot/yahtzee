import { Col, Row, Table } from 'react-bootstrap';
import { ScoreCardProps } from '../types/props';

export default function ScoreCard(props: ScoreCardProps) {
  return (
    <>
      <Row>
        <Col sm="auto">
          <Table bordered>
            <tbody>
              <tr>
                <td>에이스</td>
                <td>0</td>
              </tr>
              <tr>
                <td>듀얼</td>
                <td>0</td>
              </tr>
              <tr>
                <td>트리플</td>
                <td>0</td>
              </tr>
              <tr>
                <td>쿼드</td>
                <td>0</td>
              </tr>
              <tr>
                <td>펜타</td>
                <td>0</td>
              </tr>
              <tr>
                <td>헥사</td>
                <td>0</td>
              </tr>
              <tr className="total-score">
                <td>상단 점수의 합이 63점 이상이라면</td>
                <td>0/63</td>
              </tr>
              <tr className="total-score">
                <td>상단 보너스 +35점</td>
                <td>0</td>
              </tr>
              <tr>
                <td>초이스</td>
                <td>0</td>
              </tr>
              <tr>
                <td>포커</td>
                <td>0</td>
              </tr>
              <tr>
                <td>풀 하우스</td>
                <td>0</td>
              </tr>
              <tr>
                <td>스몰 스트레이트</td>
                <td>0</td>
              </tr>
              <tr>
                <td>라지 스트레이트</td>
                <td>0</td>
              </tr>
              <tr>
                <td>요트</td>
                <td>0</td>
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
