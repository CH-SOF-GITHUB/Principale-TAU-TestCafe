import testcafe, {Selector, t} from "testcafe";

class page {
    constructor() {
        this.accept_cookie = Selector('button.ambar-btn-accept');
        this.logIn_link = Selector('a').find('span').withText('Log in');

        this.t = testcafe.t;
        // Methods to interact with the form elements
        this.click_cookie = async () => {
            if (await this.accept_cookie.exists && await this.accept_cookie.visible) {
                await t.click(this.accept_cookie);
                console.log("Accept cookie clicked.");
            } else {
                console.log("Accept cookie button not visible or not found.");
            }
        };

        this.click_sign_in_link = async () => {
            await t
                .expect(this.logIn_link.exists).ok()
                .click(this.logIn_link);
            console.log("Amasty sign in link clicked");
        };
    }
}

export default page;
