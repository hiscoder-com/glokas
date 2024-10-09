import { expect, test } from '@playwright/test'

test.describe(`Routing`, () => {
  test(`should render the home page`, async ({ page: browserPage }) => {
    const response = await browserPage.goto(`http://localhost:3000/`)
    expect(response.status()).toBe(200)
    await expect(browserPage).toHaveURL(`http://localhost:3000/`)
  })
})
