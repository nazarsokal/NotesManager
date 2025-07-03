  describe('Notes Manager E2E Test', () => {
    beforeEach(() => {
      cy.visit('/');
    });

    it('should load notes, switch language to Ukrainian', () => {
      // Click "See All Notes" and wait for notes to load
      cy.contains('button', 'See All Notes').click();
      cy.get('.grid').should('be.visible');

      // Switch language to Ukrainian
      cy.get('select').select('uk');
      cy.contains('Ваші нотатки').should('be.visible'); // Verify Ukrainian title

      // Open create note modal
      cy.contains('button', 'Створити нотатку').click();
      cy.get('.fixed').should('be.visible');

    });
  });