import {Selector} from 'testcafe';
import xpathSelector from '../utils/xpath-selector.js';

class Page {
    constructor() {
        // General form selectors
        this.register_title_header = Selector(".page-title");
        this.register_gender_male = Selector("#gender-male");
        this.register_gender_female = Selector("#gender-female");
        // form selectors
        this.register_firstname_input = Selector("#FirstName");
        this.register_lastname_input = Selector("#LastName");
        this.register_email_input = Selector("#Email");
        this.register_company = Selector("#Company");
        this.register_password = Selector("#Password");
        this.register_confirm_password = Selector("#ConfirmPassword");
        this.register_button = Selector("#register-button");

        // register result
        // success url = https://demo.nopcommerce.com/registerresult/1?returnUrl=/
        this.register_success_message = xpathSelector("//div[@class='page-body']//div[@class='result']");
    }
}

export default Page;
