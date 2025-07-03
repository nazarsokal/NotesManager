  describe('Notes Manager E2E Test', () => {
    beforeEach(() => {
      cy.visit('/');
    });

    it('should load notes, switch language to Ukrainian, and create a note', () => {
      // Click "See All Notes" and wait for notes to load
      cy.contains('button', 'See All Notes').click();
      cy.get('.grid').should('be.visible');

      // Switch language to Ukrainian
      cy.get('select').select('uk');
      cy.contains('Ваші нотатки').should('be.visible'); // Verify Ukrainian title

      // Open create note modal
      cy.contains('button', 'Створити нотатку').click();
      cy.get('.fixed').should('be.visible');

      // Fill and submit the form
      cy.get('input[name="title"]').type('Test Note');
      cy.get('textarea').type('Test Content');
      cy.get('input[type="date"]').type('2025-07-03');
      cy.get('button').contains('Створити').click();

      // Verify the new note appears
      cy.contains('Test Note').should('be.visible');
      cy.get('.grid div').should('have.length.greaterThan', 0);
    });
  });