import { Col, Row, Table } from 'react-bootstrap';
import { ScoreEvaluationProps } from '../types/props';

export default function ScoreEvaluation(props: ScoreEvaluationProps) {
  const CONTENTS = [
    {
      scoreRange: { min: 300, max: 325 },
      evaluation: '주사위 신!',
    },
    {
      scoreRange: { min: 200, max: 299 },
      evaluation: '진짜 고수의 영역!',
    },
    {
      scoreRange: { min: 150, max: 199 },
      evaluation: '조금 굴릴 줄 아시는데요?',
    },
    {
      scoreRange: { min: 100, max: 149 },
      evaluation: '보통이시네요.',
    },
    {
      scoreRange: { min: 10, max: 99 },
      evaluation: '연습이 더 필요합니다.',
    },
    {
      scoreRange: { min: 0, max: 9 },
      evaluation: '또 다른 신의 영역!',
    },
  ];

  return (
    <>
      <Row>
        <Col>
          <h3>점수 평가표</h3>
        </Col>
      </Row>
      <Row>
        <Col sm="auto">
          <Table bordered data-cy="score-evaluation">
            <thead>
              <tr>
                <th>점수</th>
                <th>평가</th>
              </tr>
            </thead>
            <tbody>
              {CONTENTS.map((content) => {
                return (
                  <tr
                    className={
                      props.total >= content.scoreRange.min &&
                      props.total <= content.scoreRange.max
                        ? 'score-evaluation-result'
                        : undefined
                    }
                  >
                    <td>
                      {content.scoreRange.min}~{content.scoreRange.max}점
                    </td>
                    <td>{content.evaluation}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  );
}
