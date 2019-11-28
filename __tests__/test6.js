const timeout = 5000

describe(
  '/ (Home Page)',
  () => {
    let page
    beforeAll(async () => {
      page = await global.__BROWSER__.newPage()
      await page.goto('https://brancapp-qa.tiarg.net.ar/')
    
    }, timeout)

    afterAll(async () => {
      await page.close()
    })

    it('should load without error', async () => {
        
        
        await page.waitForSelector('form');
        await page.type('name="username"', 'claudia.torres@tiarg.com.ar');
    
        await page.type('name="password"','tiarg1234');
        
    
        await page.click('[type="submit"]');
        await page.waitForSelector('#root > div > div.content > div.grid > div.header > div > div.modul-name');
        const html = await page.$eval('.#root > div > div.content > div.grid > div.header > div > div.modul-name', el => el.innerHTML);
    
        expect(html).toBe('Home');
    })

    

  },
  timeout
)
