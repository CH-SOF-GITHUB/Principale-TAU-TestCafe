import {ClientFunction} from 'testcafe';
import homePage from "../page-model/home.js";
import registerPage from "../page-model/register.js";
import loginPage from "../page-model/login.js";
import customerPage from "../page-model/customer.js";

// declare url of testcafe
const URL = "https://magento2demo.firebearstudio.com/";
const REGISTER_URL = "https://magento2demo.firebearstudio.com/customer/account/create/";
// ---------------------------------------------------------------------------------------------------------------------
let getWindowUrl = ClientFunction(() => window.document.documentURI);
let getURL = ClientFunction(() => window.location.href);
let randomNumber = Math.floor(Math.random() * 10000);
let userEmail = 'chaker' + randomNumber + '@test.com';
// let currentTitle = window.document.title;

// Implement Register Test with Page Model
let home_page = new homePage();
let register_page = new registerPage();
let login_page = new loginPage();
let customer_page = new customerPage();


fixture("Fixture Register")
    .meta('fixtureID', 'fmagento2-0001')
    .meta({author: 'Chaker Ben Said', creationDate: '22/05/2025'})
    .page(URL)
    .beforeEach(async t => {
        await t
            .maximizeWindow();
    });

test
    .meta('testID', 'tmagento2-001')
    ("TC001: Assert Home Page loads correctly", async t => {
        let currentUrl = await getWindowUrl();
        await t
            .expect(currentUrl).eql(URL)
            .takeScreenshot()
            .expect(home_page.home_title_header_locator.exists).ok()
            .takeScreenshot()
            .takeElementScreenshot(home_page.home_title_header_locator)
    });

test
    .meta('testID', 'tmagento2-002')
    ("TC002: User Registration loads correctly", async t => {
        await t
            .click(home_page.registerLink_locator)
        let register_currentUrl = await getWindowUrl();
        await t
            .expect(register_currentUrl).eql(REGISTER_URL)
            .expect(register_page.register_title_header.exists).ok()
            .takeScreenshot()
            .takeElementScreenshot(register_page.register_title_header)

    });

test.meta('testID', 'tmagento2-004')
("TC004: User Registration with valid values", async t => {
    await t.click(home_page.registerLink_locator)
    await register_page.submitFirstName('John');
    await register_page.submitLastName('Doe');
    await register_page.check_is_subscribed();
    await register_page.check_assistance_allowed();
    await register_page.submitEmail(userEmail);
    await register_page.submitPassword('Admin12345!');
    await register_page.submitConfirmPassword('Admin12345!');
    await register_page.check_show_password();
    await register_page.click_register_button();
    await t
        .expect(register_page.register_success_message.exists).ok()
        .expect(register_page.register_success_message.innerText).eql("Thank you for registering with Main Website Store.")
        .expect(await getWindowUrl()).eql("https://magento2demo.firebearstudio.com/customer/account/")
        .takeScreenshot();
});
