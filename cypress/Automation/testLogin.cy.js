describe('Login Automation', () => {
    beforeEach(() => {
        // Abaikan error initMap
        Cypress.on('uncaught:exception', (err, runnable) => {
          if (err.message.includes('initMap')) {
            return false; // Mengabaikan error ini
          }
        });
      });
    it('Login to Fancypedia', () => {
      // Buka halaman login
      cy.visit('https://fancypedia.my.id/pages/signin/');
  
      // Set ukuran jendela browser
      cy.viewport(942, 1050);
  
      // Masukkan username
      cy.get('#usernamelogin').type('salman1');
  
      // Masukkan password
      cy.get('#passwordlogin').type('123123');
  
      // Klik tombol Login
      cy.get('.button').click();
  
      // Tunggu elemen konfirmasi atau halaman berikutnya untuk dimuat
      cy.get('#some_element_after_login', { timeout: 50000 }).should('be.visible');
  
      // Verifikasi login berhasil
      cy.get('#some_element_after_login').then((confirmationElement) => {
        cy.wrap(confirmationElement).invoke('text').then((text) => {
          console.log(text);
        });
      });
    });
  });
  