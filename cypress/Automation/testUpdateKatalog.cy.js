describe('Update Katalog Automation', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        if (err.message.includes('initMap')) {
          return false; // Mengabaikan error ini
        }
      });
    });
    it('Login and Update Katalog', () => {
        
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
      cy.contains('Get Blog/Catalog').click({ force: true });
      // Cari dan klik link Edit
      cy.contains('Edit').click();
      cy.wait(10000);
      // Update data di form
      cy.get('#content_one').clear().type('testing update');
      cy.get('#content_two').clear().type('Testing update katalog');
      cy.get('#image').clear().type('Gambar masih input text');
      cy.get('#description').clear().type('update testing berhasil');
  
      // Klik tombol Update
      cy.get('button').contains('Update').click();
  
      // Verifikasi bahwa update berhasil
      cy.contains('Update berhasil').should('be.visible');
    });
  
  