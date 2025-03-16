import { browser } from '@wdio/globals';

export default class Page {
    async open(url) {
        await browser.url('')
    }
}
