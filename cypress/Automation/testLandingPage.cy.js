describe('Get Landing Page', () => {
    beforeEach(() => {
        // Abaikan error initMap
        Cypress.on('uncaught:exception', (err, runnable) => {
          if (err.message.includes('initMap')) {
            return false; // Mengabaikan error ini
          }
        });
      });
    it ('Landing Page', () => {
        cy.visit('https://fancypedia.my.id/');
    });
});