import {ClientFunction} from 'testcafe';
import homePage from "../page-model/home.js";
import loginPage from "../page-model/login.js";
import customerPage from "../page-model/customer.js";


// declare url of testcafe
const URL = "https://magento2demo.firebearstudio.com/";
const LOGIN_URL = "https://magento2demo.firebearstudio.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvMmRlbW8uZmlyZWJlYXJzdHVkaW8uY29tLw~~/";
// ---------------------------------------------------------------------------------------------------------------------
let getWindowURI = ClientFunction(() => window.document.documentURI);
let getURL = ClientFunction(() => window.location.href);

// Implement Register Test with Page Model
let home_page = new homePage();
let login_page = new loginPage();
let customer_page = new customerPage();


fixture("Fixture Login")
    .meta('fixtureID', 'fmagento2-0002')
    .meta({author: 'Chaker Ben Said', creationDate: '22/05/2025'})
    .page(URL)
    .beforeEach(async t => {
        await t
            .maximizeWindow();
    });

test
    .meta('testID', 'tmagento2-003')
    ("TC003: User Login loads correctly", async t => {
        await t
            .click(home_page.loginLink_locator);
        let login_currentUrl = await getWindowURI();
        await t
            .expect(login_currentUrl).eql(LOGIN_URL)
            .takeScreenshot();
    });

test
    .meta('testID', 'tmagento2-005')
    ("TC005: User Login with valid values", async t => {
        await t
            .click(home_page.loginLink_locator)
            .expect(login_page.login_title_header.exists).ok();
        await login_page.SubmitLoginEmail("bchaker28@yahoo.com");
        await login_page.SubmitLoginPassword("Admin12345!");
        await login_page.ClickLoginButton();
        await t
            .expect(await getWindowURI()).eql("https://magento2demo.firebearstudio.com/")
            .expect(await customer_page.success_header_menu.exists).ok()
            .takeScreenshot()
            .takeElementScreenshot(customer_page.success_header_menu);
    });

test
    .meta('testID', 'tmagento2-006')
    ("check login and access to my account", async t => {
        await t
            .click(home_page.loginLink_locator)
            .expect(login_page.login_title_header.exists).ok();
        await login_page.SubmitLoginEmail("bchaker28@yahoo.com");
        await login_page.SubmitLoginPassword("Admin12345!");
        await login_page.ClickLoginButton();
        await customer_page.ClickCustomerMenuToggle();
        await customer_page.ClickMyAccountLink();
        await t
            .expect(await getWindowURI()).eql("https://magento2demo.firebearstudio.com/customer/account/")
            .takeScreenshot();
    });
