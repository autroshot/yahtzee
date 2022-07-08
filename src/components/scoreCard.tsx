import { Col, Row, Table } from 'react-bootstrap';

export default function ScoreCard() {
  return (
    <Row>
      <Col sm="auto">
        <Table>
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
            <tr>
              <td>상단 점수의 합이 63점 이상이라면</td>
              <td>0/63</td>
            </tr>
            <tr>
              <td>상단 보너스 +35점</td>
              <td>0</td>
            </tr>
          </tbody>
        </Table>
      </Col>
    </Row>
  );
}
