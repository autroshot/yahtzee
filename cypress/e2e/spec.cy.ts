describe('게임', () => {
  it('접속', () => {
    cy.visit('/');
  });

  it('초깃값', () => {
    cy.get('[data-cy="roll-count"]').should('contain', '0');
    cy.get('[data-cy="instruction"]').should('contain', '주사위를 굴리세요.');
    cy.get('[data-cy="rolled-dices"]').should('not.be.visible');
  });

  it('주사위 굴리기 행동', () => {
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

    cy.contains('주사위 굴리기').click();

    cy.get('[data-cy="roll-count"]').should('contain', '3');
    cy.get('[data-cy="instruction"]').should('contain', '점수를 선택하세요.');
    cy.get('[data-cy="rolled-dices"]').children().should('have.length', '6');
  });
});
