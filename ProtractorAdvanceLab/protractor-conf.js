exports.config = {
    allScriptsTimeout: 11000,
    framework: 'jasmine2',
    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000,
        showColors: true,
    },
    capabilities: { 'browserName': 'chrome' },
    rootElement: '[ng-app]',
    specs: [
    'spec/*.js'
    ],
    params: {
        login: { userName: 'developer', password: 'mis123' }
        , baseUrl: "http://localhost:2016/"
    },

    onPrepare: function () {
        var jasmineReporters = require('jasmine-reporters');
        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
            consolidate: false,
            consolidateAll: false,
            savePath: 'test-results',
            filePrefix: "e2e-",
        }));
    }

};