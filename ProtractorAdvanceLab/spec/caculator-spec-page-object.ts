import app = require("../app/caculatorPage");

describe('Protractor Demo App by Page Object', function () {
    var page = new app.caculatorPage();
    it('should have a title', function () {
        page.open();
        expect(browser.getTitle()).toEqual('Super Calculator');
    });

    it('should add one and two', function () {
        page.open();
        page.caculate(1, 2);
        expect(page.elLatest.getText()).toEqual('3');
    });
});