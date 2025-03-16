const browserName = process.env.BROWSER_NAME || 'chrome';

export const config = {
    runner: 'local',

    specs: ['./test/specs/**/*.js'],

    exclude: [],

    maxInstances: 10,

    capabilities: [
        {
            browserName: browserName,
            'wdio:devtoolsOptions': {}, 
        }
    ],

    baseUrl: 'https://www.saucedemo.com/',

    logLevel: 'info',

    bail: 0,

    waitforTimeout: 10000,

    connectionRetryTimeout: 120000,

    connectionRetryCount: 3,  

    framework: 'mocha',

    reporters: [
        'spec',
        ['json', { outputDir: './reports/json-results/' }]
    ],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    before: async function () {
        await browser.url('https://www.saucedemo.com/');
    }
};

export default config;
