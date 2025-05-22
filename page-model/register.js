import {Selector, t} from 'testcafe';
import xpathSelector from '../utils/xpath-selector.js';
import * as testcafe from "testcafe";

class Page {
    constructor() {
        // General form selectors
        this.register_title_header = Selector('h1').find('span').withText('Create New Customer Account');
        // form selectors
        this.register_firstname_input = Selector("input[id='firstname']");
        this.register_lastname_input = Selector("input[id='lastname']");
        // checkbox
        this.is_subscribed_checkbox = Selector("input[id='is_subscribed']");
        this.assistance_allowed_checkbox = Selector("input[id='assistance_allowed_checkbox']");
        //
        this.register_email_input = Selector("input[id='email_address']");
        this.register_password = Selector("input[id='password']");
        this.register_confirm_password = Selector("input[id='password-confirmation']");
        // checkbox
        this.show_password_checkbox = Selector("input[id='show-password']");
        //
        this.register_button = Selector("button[id='send2']");

        this.t = testcafe.t;
        //
        this.submitFirstName = async (firstname) => {
            await t.typeText(this.register_firstname_input, firstname);
            console.log(`\nSTEP 1: First Name entered : ${firstname}`);
        }
        this.submitLastName = async (lastname) => {
            await t.typeText(this.register_lastname_input, lastname);
            console.log(`\nSTEP 2: First Name entered : ${lastname}`);
        }
        //
        this.check_is_subscribed = async () => {
            await t.click(this.is_subscribed_checkbox);
            console.log(`\nSTEP 3: Sign Up for Newsletter checked`);
        }
        this.check_assistance_allowed = async () => {
            await t.click(this.assistance_allowed_checkbox);
            console.log(`\nSTEP 4: Allow remote shopping assistance checked`);
        }
        //
        this.submitEmail = async (email) => {
            await t.typeText(this.register_email_input, email);
            console.log(`\nSTEP 5: Email entered ${email}`);
        }

        this.submitPassword = async (password) => {
            await t.typeText(this.register_password, password);
            console.log(`\nSTEP 6: Password entered ${password}`);
        }

        this.submitConfirmPassword = async (confirmPassword) => {
            await t.typeText(this.register_confirm_password, confirmPassword);
            console.log(`\nSTEP 7: Confirm Password entered ${confirmPassword}`);
        }

        this.check_show_password = async () => {
            await t.click(this.show_password_checkbox);
            console.log(`\nSTEP 8: Show Password checked`);
        }

        this.click_register_button = async () => {
            await t.click(this.register_button);
            console.log(`\nSTEP 9: register button clicked`);
        }
        // verification the register results
        this.successUrl = "https://magento2demo.firebearstudio.com/customer/account/";
        this.register_success_message = Selector("div[data-ui-id='message-success']");
    }
}

export default Page;
