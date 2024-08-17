describe('Delete Katalog Automation', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        if (err.message.includes('initMap')) {
          return false; // Mengabaikan error ini
        }
      });
    });
    it('Login and Delete Comment', () => {
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
   
  
      // Klik menu Blog/Catalog
      cy.contains('Get Comment/FAQ').click({ force: true });
  
      // Klik tombol Delete pada katalog tertentu (misalnya baris ke-3)
      cy.get('tr:nth-child(3) > td:nth-child(8) > a').click();
  
      // Konfirmasi penghapusan (asumsi ada dialog konfirmasi)
      cy.get('button').contains('Delete').click();
  
      // Verifikasi bahwa penghapusan berhasil
      cy.contains('Comment berhasil dihapus').should('be.visible');
    });
