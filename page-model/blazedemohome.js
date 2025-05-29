import testcafe, {Selector, t} from 'testcafe';

class Page {
    constructor() {
        this.home_link = Selector('a.brand').withText('home');

        // Methods to interact with the form elements
        this.t = testcafe.t;

        this.click_home_link = async () => {
            await t
                .expect(this.home_link.exists).ok()
                .click(this.home_link);
            console.log("Home link clicked");
        }

    }
}

export default Page;
