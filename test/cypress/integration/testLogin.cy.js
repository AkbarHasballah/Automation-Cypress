describe('Fancypedia Login Test', () => {
    it('should login successfully', () => {
      // Navigate to the Fancypedia login page
      cy.visit('https://fancypedia.my.id/pages/signin/');
  
      // Set window size
      cy.viewport(942, 1050);
  
      // Enter username
      cy.get('#usernamelogin').type('salman1');
  
      // Enter password
      cy.get('#passwordlogin').type('123123');
  
      // Click the login button
      cy.get('.button').click();
  
      // Wait for the confirmation message or the next page to load
      cy.get('#some_element_after_login', { timeout: 50000 }).should('be.visible');
  
      // Verify successful login
      cy.get('#some_element_after_login').then((confirmationElement) => {
        cy.wrap(confirmationElement).invoke('text').then((text) => {
          console.log(text);
        });
      });
    });
  });
  