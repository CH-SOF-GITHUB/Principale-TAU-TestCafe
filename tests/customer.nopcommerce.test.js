import {ClientFunction} from 'testcafe';
import homePage from "../page-model/home.js";
import loginPage from "../page-model/login.js";
import customerPage from "../page-model/customer.js";


// declare url of testcafe
const URL = "https://magento2demo.firebearstudio.com/";
const LOGIN_URL = "https://magento2demo.firebearstudio.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvMmRlbW8uZmlyZWJlYXJzdHVkaW8uY29tLw~~/";
// ---------------------------------------------------------------------------------------------------------------------
let getWindowURI = ClientFunction(() => window.document.documentURI);

// Implement Register Test with Page Model
let home_page = new homePage();
let login_page = new loginPage();
let customer_page = new customerPage();

fixture("Fixture Customer")
    .meta('fixtureID', 'fmagento2-0003')
    .meta({author: 'Chaker Ben Said', creationDate: '22/05/2025'})
    .page(URL)
    .beforeEach(async t => {
        await t
            .maximizeWindow();
    });

test
    .meta('testID', 'tmagento2-007')
    ("check my orders in my account", async t => {
        await t.click(home_page.loginLink_locator);
        await login_page.SubmitLoginEmail("bchaker28@yahoo.com");
        await login_page.SubmitLoginPassword("Admin12345!");
        await login_page.ClickLoginButton();
        await customer_page.ClickCustomerMenuToggle();
        await customer_page.ClickMyAccountLink();
        await customer_page.ClickMyOrdersSidebarLink();
        await t
            .expect(customer_page.my_orders_empty_message.exists).ok()
            .takeElementScreenshot(customer_page.my_orders_empty_message);
    });
