const { Builder, By, until } = require('selenium-webdriver');

async function runTest() {
    const driver = await new Builder().forBrowser('firefox').build();
    try {
        await driver.get('http://www.club540.com/tricktionary');

        for (let i = 1; i <= 10; i++) {
            const buttonXPath = `/html/body/div/section/div[2]/div/div[${i}]/span`;
            const closeButtonXPath = '/html/body/div/section/trick-detail/a/i';

            const button = await driver.wait(until.elementLocated(By.xpath(buttonXPath)), 10000);
            await button.click();

            await driver.sleep(1000);

            const closeButton = await driver.findElement(By.xpath(closeButtonXPath));
            await closeButton.click();
            await driver.sleep(1000);
        }
    } catch (error) {
        console.error('Возникла ошибка:', error);
    } finally {
        await driver.quit();
    }
}

runTest();
