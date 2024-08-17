describe('Registration Automation', () => {
    beforeEach(() => {
        // Abaikan error initMap
        Cypress.on('uncaught:exception', (err, runnable) => {
          if (err.message.includes('initMap')) {
            return false; // Mengabaikan error ini
          }
        });
      });
    it('Register to Fancypedia', () => {
      // Buka halaman registrasi
      cy.visit('https://fancypedia.my.id/pages/signup/index.html');
  
      // Set ukuran jendela browser
      cy.viewport(942, 1050);
  
      // Masukkan username
      cy.get('#usernamesignup').type('maulanaIMN');
  
      // Masukkan password
      cy.get('#passwordsignup').type('123123');
  
      // Masukkan nomor telepon
      cy.get('#nowa').type('6285727112091');
  
      // Klik tombol Submit
      cy.get('.button').click();
  
      // Tunggu elemen konfirmasi atau halaman berikutnya untuk dimuat
      cy.get('#some_element_after_registration', { timeout: 5000 }).should('be.visible');
  
      // Verifikasi registrasi berhasil
      cy.get('#some_element_after_registration').then((confirmationElement) => {
        cy.wrap(confirmationElement).invoke('text').then((text) => {
          console.log(text);
        });
      });
    });
  });
  