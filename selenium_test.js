const {By, Builder, until} = require('selenium-webdriver');

async function runTest() {
  // Set up Selenium WebDriver
  const driver = await new Builder().forBrowser('chrome').build();

  try {
    // Navigate to the webpage
    await driver.get('file:///C:/Users/Sophie/Documents/Skripte/QA%20mittelse2e/interactive-rating/index.html'); // Replace with the actual file path of your HTML file

    const ratingElements = await driver.findElements(By.css('.circle'));
    const actions = await driver.actions({async: true});
    try {
      await actions.move({origin: ratingElements[5]}).perform();
      isHoverable = true;
      console.log('Hover action successful');
    } catch (error) {
      console.log('Hover action failed:', error);
    };
    
    await ratingElements[0].click();

    // Click the submit button
    const btnElement = await driver.findElement(By.id('btn'));
    await btnElement.click();

    // Wait for the evaluation and thank you divs to be displayed
    await driver.wait(until.elementLocated(By.css('.thankyouHeading')), 5000);
    await driver.wait(until.elementLocated(By.css('.rating')), 5000);

    // Verify that the evaluation and thank you divs are displayed
    const evaluationHeading = await driver.findElement(By.css('.thankyouHeading'));
    const ratingElement = await driver.findElement(By.css('.rating'));
    
    const isThankyouDisplayed = await evaluationHeading.isDisplayed();
    const isRatingDisplayed = await ratingElement.isDisplayed();

    if (isRatingDisplayed && !isThankyouDisplayed) {
      console.log('Test failed: Rating is displayed, but Thank you is not displayed');
    } else if (!isRatingDisplayed && isThankyouDisplayed) {
      console.log('Test failed: Rating is displayed, but Thank you is not displayed');
    } else {
      console.log('Test passed: Rating and Thank you are displayed');
    }
  } finally {
    // Close the browser
    await driver.quit();
  }
}

runTest();