const { Builder, By, until } = require('selenium-webdriver');

async function testLogin() {
  // Initialize the WebDriver
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    // Navigate to the Fancypedia login page
    await driver.get('https://fancypedia.my.id/pages/signin/');

    // Set window size
    await driver.manage().window().setRect({ width: 942, height: 1050 });

    // Enter username
    await driver.findElement(By.id('usernamelogin')).sendKeys('salman1');

    // Enter password
    await driver.findElement(By.id('passwordlogin')).sendKeys('123123');

    // Click the login button
    await driver.findElement(By.css('.button')).click();

    // Wait for the confirmation message or the next page to load
    await driver.wait(until.elementLocated(By.id('some_element_after_login')), 50000);

    // Verify successful login
    let confirmationElement = await driver.findElement(By.id('some_element_after_login'));
    console.log(await confirmationElement.getText());

  } finally {
    // Close the WebDriver
    await driver.quit();
  }
}

testLogin();
