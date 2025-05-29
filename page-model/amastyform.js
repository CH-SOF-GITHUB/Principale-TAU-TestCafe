import testcafe, {Selector, t} from 'testcafe';

class Page {
    constructor() {
        // Existing form
        this.form_exist_by_role = Selector('div#social-login-popup');
        this.form_title = Selector('div#social-login-popup').find('h2');
        this.form_forgotpwd_link = Selector('a').withText('Forgot password?');
        /*
         Actions form
         */
        this.register_form_link = Selector('li#tab-amsl-register').find('span').withText('Register');
        this.registerText = Selector('p').withText('Use your customer account to view all invoices and purchases for one-clickdownloads, update extensions to the latest versions for free, and extend your support period.');
        /*
        wen elements of form register
        */
        this.firstname_input = Selector('input[id="firstname"]');                      // placeholder="First Name"
        this.lastname_input = Selector('input[id="lastname"]');                        // placeholder="Last Name"
        this.email_address_input = Selector('input[id="am-email-address"]');           // placeholder="Email"
        this.password_input = Selector('input[id="password"]');                        // placeholder="Password"
        this.confirm_password_input = Selector('input[id="password-confirmation"]');   // placeholder="Confirm Password"
        this.checkbox_privacy_policy = Selector('input[title="Privacy Checkbox"]');
        this.checkbox_processing_consent = Selector('input[title="Processing of my personal data"]');
        this.registerBtn = Selector('button[type="submit"].action');
        // declare a TestController
        this.t = testcafe.t;
        /*
         Methods to interact with the form elements
        */
        this.set_firstname = async (firstname) => {
            await t
                .click(this.firstname_input)
                .typeText(this.firstname_input, firstname);
        };
        this.set_lastname = async (lastname) => {
            await t
                .click(this.lastname_input)
                .typeText(this.lastname_input, lastname);
        };
        this.set_email = async (email) => {
            await t
                .click(this.email_address_input)
                .typeText(this.email_address_input, email);
        };
        this.set_password = async (pwd) => {
            await t
                .click(this.password_input)
                .typeText(this.password_input, pwd);
        };
        this.set_confirm_password = async (confPwd) => {
            await t
                .click(this.confirm_password_input)
                .typeText(this.confirm_password_input, confPwd)
        };
        this.check_privacy_policy = async () => {
            await t.click(this.checkbox_privacy_policy);
        };
        this.check_processing_consent = async () => {
            await t.click(this.checkbox_processing_consent);
        };
        this.click_create_an_account = async () => {
            await t
                .click(this.registerBtn);
        };
        // // //
        // // //
        this.click_register_form_link = async () => {
            await t
                .expect(this.register_form_link.exists).ok()
                .click(this.register_form_link);
            console.log("Register form link clicked");
        }
        /*
        * Si le texte est dans un élément caché (classe sr-only),
        * cela peut poser problème selon comment TestCafe traite la visibilité,
        * mais innerText fonctionne normalement même sur les éléments cachés.
        * */
        this.getTitleForm = async () => {
            await this.form_title.innerText;
        }
    };

}

export default Page;
