const {assert} = require('chai');
const puppeteer = require('puppeteer');

const url = 'http://127.0.0.1:3000';

describe('quickstart smoke test', () => {

    it('expected ui', async () => {
        const browser = await puppeteer.launch({
            ignoreHTTPSErrors: true
        });
        const page = await browser.newPage();
        await page.goto(url);
        await page.waitFor(15000);

        let brokerJson = (await page.$eval('ul#messages li', innerHtml()));
        assert(brokerJson);
        let broker = JSON.parse(brokerJson);
        assert(broker.ipaddress);
        assert(broker.port);
        assert(broker.clusterport);

        const clientReqResp = (await page.$$eval('ul#requestResponseClient li', arrInnerHtml()));
        assert.isOk(clientReqResp.length > 0);
        assert(clientReqResp.find(v => v.startsWith('CLIENT: pinging')));
        assert(clientReqResp.find(v => v.startsWith('CLIENT: received [PONG!')));

        const serverReqResp = (await page.$$eval('ul#requestResponseService li', arrInnerHtml()));
        assert.isOk(serverReqResp.length > 0);
        serverReqResp.forEach(v => {
            assert.isOk(v.endsWith('pinged me, responding with PONG!'));
        });

        await browser.close();
    })
});

function innerHtml() {
    return v => v.innerHTML
}

function arrInnerHtml() {
    return arr => arr.map(v => v.innerHTML);
}

