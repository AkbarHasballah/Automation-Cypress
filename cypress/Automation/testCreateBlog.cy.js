describe('Create Blog Automation', () => {
  beforeEach(() => {
    // Abaikan error initMap
    Cypress.on('uncaught:exception', (err, runnable) => {
      if (err.message.includes('initMap')) {
        return false; // Mengabaikan error ini
      }
    });
  });

  it('Login and Create Blog', () => {
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
    cy.wait(20000); // Sesuaikan dengan kebutuhan, biasanya untuk memastikan halaman telah terbuka

    // Klik tombol navigasi
    cy.get('.navbar-toggler').click();

    // Klik menu Create Blog/Catalog dengan force
    cy.contains('Create Blog/Catalog').click({ force: true });

    // Isi form untuk membuat blog
    cy.get('#id').click().type('10');
    cy.get('#content_one').click().type('4 - Juli-2024');
    cy.get('#content_two').click().type('Membuat Katalog Untuk Tugas Besa QA');
    cy.get('#image').click().type('QA.jpg');
    cy.get('#description').click().type('Ini sekedar Create testing');

    // Klik tombol Create
    cy.get('.button').click();

    // Tunggu dialog konfirmasi muncul
    cy.get('.swal2-confirm').click();
  });
});
