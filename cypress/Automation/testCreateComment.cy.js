describe('Create Blog Automation', () => {
    beforeEach(() => {
      // Abaikan error initMap
      Cypress.on('uncaught:exception', (err, runnable) => {
        if (err.message.includes('initMap')) {
          return false; // Mengabaikan error ini
        }
      });
    });
  
    it('Login and Create Comments', () => {
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
  
      // Tunggu sampai halaman terbuka
      cy.wait(10000); // Sesuaikan dengan kebutuhan, biasanya untuk memastikan halaman telah terbuka
  
      // Klik tombol navigasi
      cy.get('.navbar-toggler').click();
  
      // Klik menu Create Comment/FAQ dengan force
      cy.contains('Create Comment/FAQ').click({ force: true });
  
      // Isi form untuk membuat komentar
      cy.get('#id').click().type('123');
      cy.get('#username').click().type('Salman Akbar');
      cy.get('#comment').click().type('Bagaimana cara membuat Automation TB ini');
      cy.get('#questions').click().type('Menggunakan Cypress ');
      cy.get('#tanggal').click().type('4 July 2024');
  
      // Klik tombol Create
      cy.get('.button').click();
  
      // Tunggu dialog konfirmasi muncul
      cy.get('.swal2-confirm').click();
    });
  });
  