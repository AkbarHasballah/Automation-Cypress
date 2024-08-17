describe('Update Katalog Automation', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        if (err.message.includes('initMap')) {
          return false; // Mengabaikan error ini
        }
      });
    });
    it('Login and Update Comment', () => {
        
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
   
  
      // Klik menu Comment/FAQ
      cy.contains('Get Comment/FAQ').click({ force: true });
      // Cari dan klik link Edit
      cy.contains('Edit').click();
      cy.wait(10000);
        // Update field yang diinginkan
    cy.get('#username').click().clear().type('haduh username siapa');
    cy.get('#comment').click().clear().type('ini question yang telah di update');
    cy.get('#questions').click().clear().type('update jawaban');
    cy.get('#tanggal').click().clear().type('212121 tanggal gasesuai format safjhsajfsahf');
    cy.get('#status').click();  
      // Klik tombol Update
      cy.get('button').contains('Update').click();

    });
  
  