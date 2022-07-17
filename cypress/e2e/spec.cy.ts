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
