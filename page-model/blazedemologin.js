import testcafe, {Selector, t} from 'testcafe';


class Page {
    constructor() {
        // selectors
        this.register_link = Selector('a').withText('Register');


        this.t = testcafe.t;
        // Methods to interact with the form elements
        this.clickRegisterLink = async () => {
            await t
                .expect(this.register_link.exists).ok()
                .click(this.register_link);
            console.log("Register link clicked");
        }
    }
}


export default Page;
