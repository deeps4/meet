import puppeteer from "puppeteer";

describe('show/hide an event details', () => {
    let browser;
    let page;
    beforeAll(async () => {
        // to open a browser
        browser = await puppeteer.launch({ headless: false, slowMo: 250, timeout: 0 });
        // create a page (tab) in browser
        page = await browser.newPage();
        //  open localhost:3000 in the page
        await page.goto('http://localhost:3000')
        // wait for event to be present on screen.
        await page.waitForSelector('.event');
    });


    afterAll(() => {
        // close browser
        browser.close();
    })

    test('An event element is collapsed by default', async () => {

        // find details inside event
        const eventDetails = await page.$('.event .details');

        // check if details are null or not.
        expect(eventDetails).toBeNull();

    })

    test('User can expand an event to see its details', async () => {

        await page.click('.event .details-btn');

        // find details inside event
        const eventDetails = await page.$('.event .details');

        // check if details are there.
        expect(eventDetails).toBeDefined();
    })

    test('User can collapse an event to hide details', async () => {

        await page.click('.event .details-btn');
        const eventDetails = await page.$('.event .details');
        expect(eventDetails).toBeNull();
    })
});