const { Builder, By, until } = require('selenium-webdriver');

async function testRegister() {
  // Initialize the WebDriver
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    // Navigate to the Fancypedia registration page
    await driver.get('https://fancypedia.my.id/pages/signup/index.html');

    // Set window size
    await driver.manage().window().setRect({ width: 942, height: 1050 });

    // Enter username
    await driver.findElement(By.id('usernamesignup')).sendKeys('maulanaIMN');

    // Enter password
    await driver.findElement(By.id('passwordsignup')).sendKeys('321123');

    // Enter phone number
    await driver.findElement(By.id('nowa')).sendKeys('6285727112091');

    // Click the submit button
    await driver.findElement(By.css('.button')).click();

    // Wait for the confirmation message or the next page to load
    await driver.wait(until.elementLocated(By.id('some_element_after_registration')), 5000);

    // Verify successful registration
    let confirmationElement = await driver.findElement(By.id('some_element_after_registration'));
    console.log(await confirmationElement.getText());

  } finally {
    // Close the WebDriver
    await driver.quit();
  }
}

testRegister();
