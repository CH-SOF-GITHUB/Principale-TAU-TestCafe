import {Selector, t} from "testcafe";
import testcafe from "testcafe";

class Page {
    constructor() {
        // General selectors
        this.login_title_header = Selector('h1').find('span').withText('Customer Login');
        this.login_email_input = Selector("input[id='email']");
        this.login_password_input = Selector("input[id='pass']");
        this.login_button = Selector("button[id='send2']");
        this.forget_password_link = Selector(".forgot-password");

        // Methods to interact with the page model
        this.t = testcafe.t;

        this.SubmitLoginEmail = async (email) => {
            await t
                .typeText(this.login_email_input, email);
            console.log(`\nSTEP 1: Email entered ${email}`);
        }

        this.SubmitLoginPassword = async (password) => {
            await t
                .typeText(this.login_password_input, password);
            console.log(`\nSTEP 2: Email entered ${password}`);
        }

        this.ClickLoginButton = async () => {
            await t
                .click(this.login_button);
            console.log(`\nSTEP 3: Login button clicked`);
        }
    }
}

export default Page;
