describe('Get Katalog Automation', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        if (err.message.includes('initMap')) {
          return false; // Mengabaikan error ini
        }
      });
    });
  
    it('Login and Get Katalog', () => {
    
      // Buka halaman login
      cy.visit('https://fancypedia.my.id/pages/signinadmin.html');
  
      // Set ukuran jendela browser
      cy.viewport(974, 1050);
  
      // Masukkan username
      cy.get('#username').click().type('raull');
  
      // Masukkan password
      cy.get('#password').click().type('ganteng');
  
      // Klik tombol Login
      cy.get('.button').click();
      cy.wait(10000); // Sesuaikan dengan kebutuhan, biasanya untuk memastikan halaman telah terbuka

      // Klik tombol navigasi
      cy.get('.navbar-toggler').click();
  
      // Klik menu Get Blog/Catalog
      cy.contains('Get Comment/FAQ').click({ force: true });
  
      
    });
  