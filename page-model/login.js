import {Selector} from "testcafe";

class Page {
    constructor() {
        // General selectors
        this.login_title_header = Selector(".page-title");  // without text
        this.login_email_input = Selector("#Email");
        this.login_password_input = Selector("#Password");
        this.login_button = Selector(".login-button");
        this.forget_password_link = Selector(".forgot-password");
        //
        this.login_title_header = Selector('strong').withText('Returning Customer');
    }
}

export default Page;
