const { Builder, By, until } = require('selenium-webdriver');

async function runTest() {
    const driver = await new Builder().forBrowser('firefox').build();
    try {
        await driver.get('http://80.78.245.211/login');

        await driver.sleep(1000)

        const loginInput = await driver.wait(until.elementLocated(By.xpath('//*[@id=":r0:"]')), 10000);
        await loginInput.sendKeys('test@email.ru')

        await driver.sleep(1000)

        const passwordInput = await driver.wait(until.elementLocated(By.xpath('//*[@id=":r1:"]')), 10000);
        await passwordInput.sendKeys('testerMain')

        await driver.sleep(1000)

        const loginButton = await driver.wait(until.elementLocated(By.xpath('//*[@id=":r2:"]')), 10000);
        await loginButton.click()

        await driver.sleep(1000)

        const inviteButton = await driver.wait(until.elementLocated(By.xpath('/html/body/div/div/div/div/nav/nav/div[2]/div[2]/span')), 10000);
        await inviteButton.click()
        await driver.sleep(1000)

        const sendInviteButton = await driver.wait(until.elementLocated(By.xpath('/html/body/div/div/main/div[2]/div/div/div/h2/button/span[1]')), 10000);
        await sendInviteButton.click()
        await driver.sleep(1000)

        const inviteInput = await driver.wait(until.elementLocated(By.xpath('//input[@id=":r2s:"]')), 20000);
        await driver.sleep(1000)
        await inviteInput.click()
        await driver.sleep(1000)
        await inviteInput.sendKeys('meow')

        await driver.sleep(1000)

    } catch (error) {
        console.error('Возникла ошибка:', error);
    } finally {
        await driver.quit();
    }
}

runTest();

