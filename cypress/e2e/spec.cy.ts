/// <reference types="cypress" />

describe('초깃값', () => {
  it('접속', () => {
    cy.visit('/');
  });

  it('초깃값', () => {
    cy.get('[data-cy="roll-count"]').should('contain', '0');
    cy.get('[data-cy="instruction"]').should('contain', '주사위를 굴리세요.');
    cy.get('[data-cy="rolled-dices"]').should('not.be.visible');
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
    cy.get('[data-cy="rolled-dices"]').children().should('have.length', '6');

    cy.contains('주사위 굴리기').click();

    cy.get('[data-cy="roll-count"]').should('contain', '2');
    cy.get('[data-cy="instruction"]').should(
      'contain',
      '주사위를 다시 굴리거나 점수를 선택하세요.'
    );
    cy.get('[data-cy="rolled-dices"]').children().should('have.length', '6');

    cy.contains('주사위 굴리기').click();

    cy.get('[data-cy="roll-count"]').should('contain', '3');
    cy.get('[data-cy="instruction"]').should('contain', '점수를 선택하세요.');
    cy.get('[data-cy="rolled-dices"]').children().should('have.length', '6');
  });

  it('제한 횟수 초과 주사위 굴리기', () => {
    for (let i = 0; i < 4; i++) {
      cy.contains('주사위 굴리기').click();
    }

    cy.contains('주사위 굴리기').click();

    cy.get('[data-cy="roll-count"]').should('contain', '3');
    cy.get('[data-cy="instruction"]').should('contain', '점수를 선택하세요.');
    cy.get('[data-cy="rolled-dices"]').children().should('have.length', '6');
  });

  it('주사위 값 변화 확인', () => {
    cy.contains('주사위 굴리기').click();

    cy.get('[data-cy="rolled-dices"]')
      .children()
      .then(($beforeDices) => {
        const beforeDiceValues = getDiceValues($beforeDices);

        cy.contains('주사위 굴리기').click();
        cy.contains('주사위 굴리기').click();

        cy.get('[data-cy="rolled-dices"]')
          .children()
          .then(($afterDices) => {
            const afterDiceValues = getDiceValues($afterDices);

            expect(afterDiceValues).to.not.deep.equal(beforeDiceValues);
          });
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
