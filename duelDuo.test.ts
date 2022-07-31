
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test(' clicking Draw button displays div ', async () => {
    const choices = await driver.findElement(By.id('choices'))
    const displayed = await choices.isDisplayed();
    await driver.findElement(By.id('draw')).click()
    expect(displayed).toBe(true)
})

test(' clicking Draw button displays div ', async () => {
    const duo = await driver.findElement(By.id('player-duo'))
    const displayed = await duo.isDisplayed();
    await driver.findElement(By.id('draw')).click()
    await driver.findElement(By.xpath('//*[text()="Add to Duo"]')).click()
    expect(displayed).toBe(true)
})

