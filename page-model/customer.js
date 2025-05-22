import testcafe, {Selector, t} from "testcafe";

class Page {
    constructor() {
        // General selectors
        //
        this.success_header_menu = Selector(".greet");
        this.customer_menu_toggle = Selector("button[data-action='customer-menu-toggle']");
        this.my_account_link = Selector('a').withText('My Account');
        this.my_orders_sidebar_link = Selector('a').withText('My Orders');
        this.my_orders_empty_message = Selector('div').find('span').withText('You have placed no orders.');
        // Methods to interact with the page model
        this.t = testcafe.t;

        this.ClickCustomerMenuToggle = async () => {
            await t.click(this.customer_menu_toggle);
            console.log(`\nSTEP 4: Custom Menu Toggle clicked`);
        }

        this.ClickMyAccountLink = async () => {
            await t.click(this.my_account_link);
            console.log(`\nSTEP 5: My Account Link clicked`);
        }

        this.ClickMyOrdersSidebarLink = async () => {
            await t.click(this.my_orders_sidebar_link);
            console.log(`\nSTEP 6: My Orders Sidebar Link clicked`);
        }
    }
}

export default Page;
