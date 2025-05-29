import {ClientFunction, test} from "testcafe";
import homePage from '../page-model/amastyhome.js';
import formPage from '../page-model/amastyform.js';
import nanoid from "nanoid";


fixture("Amasty Fixture register 002")
    .meta('fixtureID', 'famasty-002')
    .page('https://amasty.com/')
    .beforeEach(async t => {
        await t.maximizeWindow()
    });

// declare instances of page model classes
let home_page = new homePage();
let form_page = new formPage();

let getURL = ClientFunction(() => window.document.documentURI);

// generates random email strings
const randomEmailName = 'ch_email' + nanoid();


test('TC001: amasty register ideal case', async t => {
    await home_page.click_cookie();
    await home_page.click_sign_in_link();
    await form_page.click_register_form_link();
    await form_page.set_firstname('Chaker');
    await form_page.set_lastname('Ben Said');
    await form_page.set_email(`${randomEmailName}@yahoo.com`);
    await form_page.set_password('Admin12345!');
    await form_page.set_confirm_password('Admin12345!');
    await form_page.check_privacy_policy();
    await form_page.check_processing_consent();
    await form_page.click_create_an_account();
    await t.wait(15000);
    let currentURL = await getURL();
    await t.expect(currentURL).eql('https://amasty.com/customer/account/');
});
