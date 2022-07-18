/// <reference types="cypress" />

describe('접속과 초깃값', () => {
  it('접속', () => {
    cy.visit('/');
  });

  it('초깃값', () => {
    cy.get('[data-cy="round"]').should('contain', '1');
    cy.get('[data-cy="roll-count"]').should('contain', '0');
    cy.get('[data-cy="instruction"]').should('contain', '주사위를 굴리세요.');
    cy.get('[data-cy="rolled-dices"]').children().should('not.exist');
    cy.get('[data-cy="ace"]').should('not.have.text');
    cy.get('[data-cy="dual"]').should('not.have.text');
    cy.get('[data-cy="triple"]').should('not.have.text');
    cy.get('[data-cy="quad"]').should('not.have.text');
    cy.get('[data-cy="penta"]').should('not.have.text');
    cy.get('[data-cy="hexa"]').should('not.have.text');
    cy.get('[data-cy="upper-total"]').should('have.text', '0');
    cy.get('[data-cy="bonus"]').should('have.text', '0');
    cy.get('[data-cy="choice"]').should('not.have.text');
    cy.get('[data-cy="poker"]').should('not.have.text');
    cy.get('[data-cy="full-house"]').should('not.have.text');
    cy.get('[data-cy="small-straight"]').should('not.have.text');
    cy.get('[data-cy="large-straight"]').should('not.have.text');
    cy.get('[data-cy="yacht"]').should('not.have.text');
    cy.get('[data-cy="total"]').should('have.text', '0');
  });
});

describe('주사위 굴리기', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('제한 횟수 이내 주사위 굴리기', () => {
    cy.contains('주사위 굴리기').click();

    cy.get('[data-cy="roll-count"]').should('contain', '1');
    cy.get('[data-cy="instruction"]').should(
      'contain',
      '주사위를 다시 굴리거나 점수를 선택하세요.'
    );
    cy.get('[data-cy="rolled-dices"]').children().should('have.length', '5');

    cy.contains('주사위 굴리기').click();

    cy.get('[data-cy="roll-count"]').should('contain', '2');
    cy.get('[data-cy="instruction"]').should(
      'contain',
      '주사위를 다시 굴리거나 점수를 선택하세요.'
    );
    cy.get('[data-cy="rolled-dices"]').children().should('have.length', '5');

    cy.contains('주사위 굴리기').click();

    cy.get('[data-cy="roll-count"]').should('contain', '3');
    cy.get('[data-cy="instruction"]').should('contain', '점수를 선택하세요.');
    cy.get('[data-cy="rolled-dices"]').children().should('have.length', '5');
  });

  it('제한 횟수 초과 주사위 굴리기', () => {
    for (let i = 0; i < 4; i++) {
      cy.contains('주사위 굴리기').click();
    }

    cy.contains('주사위 굴리기').click();

    cy.get('[data-cy="roll-count"]').should('contain', '3');
    cy.get('[data-cy="instruction"]').should('contain', '점수를 선택하세요.');
    cy.get('[data-cy="rolled-dices"]').children().should('have.length', '5');
  });

  it('주사위 값 변화 확인', () => {
    cy.contains('주사위 굴리기').click();

    cy.get('[data-cy="rolled-dices"]')
      .children()
      .then(($firstDices) => {
        const firstDiceValues = getDiceValues($firstDices);

        cy.contains('주사위 굴리기').click();

        cy.get('[data-cy="rolled-dices"]')
          .children()
          .then(($secondDices) => {
            const secondDiceValues = getDiceValues($secondDices);

            cy.contains('주사위 굴리기').click();

            cy.get('[data-cy="rolled-dices"]')
              .children()
              .then(($thirdDices) => {
                const thirdDiceValues = getDiceValues($thirdDices);

                const isChangeExist = !(
                  JSON.stringify(firstDiceValues) ===
                    JSON.stringify(secondDiceValues) &&
                  JSON.stringify(secondDiceValues) ===
                    JSON.stringify(thirdDiceValues)
                );

                expect(isChangeExist).to.equal(true);
              });
          });
      });
  });
});

describe('주사위 선택 및 보관하기', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.contains('주사위 굴리기').click();
  });

  it('선택한 주사위 표시하기', () => {
    cy.get('[data-cy="rolled-dices"] button')
      .first()
      .click()
      .should('have.attr', 'data-selected');

    cy.get('[data-cy="rolled-dices"] button')
      .eq(1)
      .click()
      .should('have.attr', 'data-selected');

    cy.get('[data-cy="rolled-dices"] button')
      .eq(3)
      .click()
      .should('have.attr', 'data-selected');

    cy.get('[data-cy="rolled-dices"] button')
      .last()
      .click()
      .should('have.attr', 'data-selected');
  });

  it('새로 선택한 주사위의 보관 여부가 다르면 기존 선택 모두 해제하기', () => {
    selectDice(false, 1);
    selectDice(false, 2);

    cy.contains('선택한 주사위 보관하기').click();

    cy.get('[data-cy="kept-dices"] button')
      .eq(0)
      .click()
      .should('have.attr', 'data-selected');
    cy.get('[data-cy="kept-dices"] button')
      .eq(1)
      .click()
      .should('have.attr', 'data-selected');

    cy.get('[data-cy="rolled-dices"] button')
      .eq(1)
      .click()
      .should('have.attr', 'data-selected');
    cy.get('[data-cy="kept-dices"] button')
      .eq(1)
      .should('not.have.attr', 'data-selected');
    cy.get('[data-cy="kept-dices"] button')
      .eq(1)
      .should('not.have.attr', 'data-selected');

    cy.get('[data-cy="rolled-dices"] button')
      .eq(0)
      .click()
      .should('have.attr', 'data-selected');
    cy.get('[data-cy="kept-dices"] button')
      .eq(0)
      .click()
      .should('have.attr', 'data-selected');
    cy.get('[data-cy="rolled-dices"] button')
      .eq(0)
      .should('not.have.attr', 'data-selected');
    cy.get('[data-cy="rolled-dices"] button')
      .eq(1)
      .should('not.have.attr', 'data-selected');
  });

  it('선택한 주사위 보관하기', () => {
    selectDice(false, 0);
    selectDice(false, 2);
    selectDice(false, 4);

    cy.get('[data-selected]').then(($selectedDices) => {
      const selectedDiceValues = getDiceValues($selectedDices);

      cy.contains('선택한 주사위 보관하기').click();

      cy.get('[data-cy="kept-dices"] button').then(($keptDices) => {
        const keptDiceValues = getDiceValues($keptDices);

        expect(keptDiceValues).deep.equal(selectedDiceValues);
      });
    });
  });

  it('선택한 주사위 되돌리기', () => {
    let expectDiceValues: number[] = [];
    cy.get('[data-cy="rolled-dices"] button')
      .eq(1)
      .then(($dice) => {
        expectDiceValues.push(...getDiceValues($dice));
      });
    cy.get('[data-cy="rolled-dices"] button')
      .eq(4)
      .then(($dice) => {
        expectDiceValues.push(...getDiceValues($dice));
      });
    selectDice(false, 1);
    selectDice(false, 2);
    selectDice(false, 4);
    cy.contains('선택한 주사위 보관하기').click();

    cy.get('[data-cy="rolled-dices"] button').then(($dices) => {
      expectDiceValues.push(...getDiceValues($dices));
    });
    selectDice(true, 0);
    selectDice(true, 2);
    cy.contains('선택한 주사위 되돌리기').click();

    cy.get('[data-cy="rolled-dices"] button').then(($dices) => {
      const rolledDices = getDiceValues($dices);

      expectDiceValues.sort((a, b) => a - b);
      expect(rolledDices).deep.equal(expectDiceValues);
    });
  });
});

describe('점수 결정하기', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('주사위 굴림 이전에 점수 결정 시 무반응', () => {
    cy.contains('에이스').click();
    cy.get('[data-cy="ace"]').should('not.have.text');
  });

  it('점수 결정 시 다음 라운드로 가기', () => {
    cy.contains('주사위 굴리기').click();
    cy.contains('에이스').click();

    cy.get('[data-cy="round"]').should('have.text', '2');
    cy.get('[data-cy="roll-count"]').should('have.text', '0');
    cy.get('[data-cy="instruction"]').should('have.text', '주사위를 굴리세요.');
    cy.get('[data-cy="rolled-dices"]').children().should('not.exist');
  });

  it('점수 헥사로 결정하기', () => {
    cy.contains('주사위 굴리기').click();

    cy.get('[data-cy="rolled-dices"] button').then((dices) => {
      const diceValues = getDiceValues(dices);
      const hexaScore = diceValues.reduce((sum, value) => {
        if (value === 6) return sum + value;
        return sum;
      }, 0);

      cy.contains('헥사').click();

      cy.contains('헥사').parent().should('have.class', 'decided-score');
      cy.contains('헥사').next().should('have.text', hexaScore);
      cy.get('[data-cy="upper-total"').should('have.text', hexaScore);
      cy.contains('총점').next().should('have.text', hexaScore);
    });
  });

  it('점수 초이스로 결정하기', () => {
    cy.contains('주사위 굴리기').click();

    cy.get('[data-cy="rolled-dices"] button').then((dices) => {
      const diceValues = getDiceValues(dices);
      const choiceScore = diceValues.reduce((sum, value) => sum + value, 0);

      cy.contains('초이스').click();

      cy.contains('초이스').parent().should('have.class', 'decided-score');
      cy.contains('초이스').next().should('have.text', choiceScore);
      cy.get('[data-cy="upper-total"').should('have.text', 0);
      cy.contains('총점').next().should('have.text', choiceScore);
    });
  });
});

describe('점수 평가', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('게임 종료 이전에는 점수 평가표 미표시', () => {
    cy.root().should('not.have.text', '점수 평가표');

    cy.contains('주사위 굴리기').click();
    cy.contains('에이스').click();
    cy.get('[data-cy=score-evaluation]').should('not.exist');
  });

  it('게임 종료 이후 점수 평가표 표시 및 평가', () => {
    cy.contains('주사위 굴리기').click();
    cy.contains('에이스').click();
    cy.contains('주사위 굴리기').click();
    cy.contains('듀얼').click();
    cy.contains('주사위 굴리기').click();
    cy.contains('트리플').click();
    cy.contains('주사위 굴리기').click();
    cy.contains('쿼드').click();
    cy.contains('주사위 굴리기').click();
    cy.contains('펜타').click();
    cy.contains('주사위 굴리기').click();
    cy.contains('헥사').click();
    cy.contains('주사위 굴리기').click();
    cy.contains('초이스').click();
    cy.contains('주사위 굴리기').click();
    cy.contains('포커').click();
    cy.contains('주사위 굴리기').click();
    cy.contains('풀 하우스').click();
    cy.contains('주사위 굴리기').click();
    cy.contains('스몰 스트레이트').click();
    cy.contains('주사위 굴리기').click();
    cy.contains('라지 스트레이트').click();
    cy.contains('주사위 굴리기').click();
    cy.get('[data-cy=scores]').contains('요트').click();

    cy.get('[data-cy=score-evaluation]').should('exist');
    cy.get('[data-cy=total]')
      .invoke('text')
      .then(($total) => {
        const total = parseInt($total);

        if (total >= 300) {
          cy.get('[data-cy=score-evaluation] tbody tr:nth-child(1)').should(
            'have.class',
            'score-evaluation-result'
          );
        } else if (total >= 200) {
          cy.get('[data-cy=score-evaluation] tbody tr:nth-child(2)').should(
            'have.class',
            'score-evaluation-result'
          );
        } else if (total >= 150) {
          cy.get('[data-cy=score-evaluation] tbody tr:nth-child(3)').should(
            'have.class',
            'score-evaluation-result'
          );
        } else if (total >= 100) {
          cy.get('[data-cy=score-evaluation] tbody tr:nth-child(4)').should(
            'have.class',
            'score-evaluation-result'
          );
        } else if (total >= 10) {
          cy.get('[data-cy=score-evaluation] tbody tr:nth-child(5)').should(
            'have.class',
            'score-evaluation-result'
          );
        } else if (total >= 0) {
          cy.get('[data-cy=score-evaluation] tbody tr:nth-child(6)').should(
            'have.class',
            'score-evaluation-result'
          );
        }
      });
  });
});

function getDiceValues(dices: JQuery<HTMLElement>): number[] {
  let result: number[] = [];

  for (let i = 0; i < dices.length; i++) {
    result.push(+(dices[i].dataset.cyValue as string));
  }

  return result;
}

function selectDice(kept: boolean, index: number) {
  if (!kept) {
    cy.get('[data-cy="rolled-dices"] button').eq(index).click();
  } else {
    cy.get('[data-cy="kept-dices"] button').eq(index).click();
  }
}
