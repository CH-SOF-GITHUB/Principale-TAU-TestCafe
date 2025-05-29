import {test, ClientFunction} from 'testcafe';
import homePage from '../page-model/amastyhome.js';
import formPage from '../page-model/amastyform.js';
import read from '../utils/read-csv-file.js';


fixture("Amasty Fixture register 03")
    .meta('fixtureID', 'famasty-003')
    .page('https://amasty.com/')
    .beforeEach(async t => {
        t.maximizeWindow();
    });

// declare an instances of page model classes
let home_page = new homePage();
let form_page = new formPage();

// declare a method to get current url of page
let getURL = ClientFunction(() => window.document.documentURI);

let DataCsv = await read('C:\\Users\\chaker\\Desktop\\qase\\TAU-Testcafe\\utils\\datadriven.csv');

DataCsv.forEach(data => {
    test('data driven test amasty register with csv file', async t => {
        await home_page.click_cookie();
        await home_page.click_sign_in_link();
        await form_page.click_register_form_link();
        await form_page.set_firstname(data.firstname);
        await form_page.set_lastname(data.lastname);
        await form_page.set_email(data.email);
        await form_page.set_password(data.password);
        await form_page.set_confirm_password(data.confirmpwd);
        await form_page.check_privacy_policy();
        await form_page.check_processing_consent();
        await form_page.click_create_an_account();
        await t.wait(15000);
        let url = await getURL();
        await t.expect(url).eql('https://amasty.com/customer/account/');
    });
});
