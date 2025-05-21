import {Selector} from 'testcafe';

class Page {
    constructor() {
        // General selectors
        this.home_title_header_locator = Selector('h2').withText('Welcome to our store');
        this.registerLink_locator = Selector(".ico-register");
        this.loginLink_locator = Selector(".ico-login");
        this.cartLink_locator = Selector(".ico-cart");
        //
        this.customerCurrency_locator = Selector("#customerCurrency");
        this.customerCurrency_option = this.customerCurrency_locator.find('option');
        //
        this.myAccountLink_locator = Selector("a").withText("My account");
        this.logoutLink_locator = Selector("a").withText("Log out");
        this.productSearch_input_locator = Selector("#small-searchterms");
        this.search_button_locator = Selector(".search-box-button");
    }

    // Methods which perform operations on these web elements
    async search(product_text) {
        await t.typeText(this.productSearch_input_locator, product_text);
        console.log(`\nStep : search for product ${product_text}`);
    }

    async click_search_button() {
        await t.click(this.search_button_locator);
        console.log(`\nStep : click on search button`);
    }

    async click_register_link() {
        await t.click(this.registerLink_locator);
        console.log(`\nStep : click on register link`);
    }

    async click_login_link() {
        await t.click(this.loginLink_locator);
        console.log(`\nStep : click on login link`);
    }

    async click_cart_link() {
        await t.click(this.cartLink_locator);
        console.log(`\nStep : click on cart link`);
    }

    async click_my_account_link() {
        await t.click(this.myAccountLink_locator);
        console.log(`\nStep : click on my account link`);
    }

    async click_logout_link() {
        await t.click(this.logoutLink_locator);
        console.log(`\nStep : click on logout link`);
    }

    async select_currency(currency) {
        await t
            .click(this.customerCurrency_locator)
            .click(this.customerCurrency_option.withText(currency));
        console.log(`\nStep : select currency ${currency}`);
    }

    // navbar links
    async click_on_navbar_category(category) {
        await t.click(Selector('a').withText(category));
        console.log(`\nStep : click on navbar the category=='${category}'`);
    }
}

export default Page;
