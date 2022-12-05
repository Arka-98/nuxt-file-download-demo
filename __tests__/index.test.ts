import { createPage, setup } from '@nuxt/test-utils-edge'

describe('Sample', async () => {
    await setup({
        server: true,
        browser: true
    })
    it('Should fetch h1 text content', async () => {
        const page = await createPage('/')
        const elem = page.locator('h1')
        const h1Text = await elem.innerText()
        console.log(h1Text)
        expect(h1Text).not.toBeNull()
    })
    it('Should validate click event', async () => {
        const page = await createPage('/')
        let hiddenDiv = page.locator('#toggle-div')
        console.log(await hiddenDiv.isVisible())
        await page.getByRole('button', { name: 'Inline Event Emitter' }).click()
        console.log(await hiddenDiv.isVisible())
        expect(await hiddenDiv.isVisible()).toBe(true)
    })
})