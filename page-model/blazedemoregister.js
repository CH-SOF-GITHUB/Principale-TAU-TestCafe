import testcafe, {Selector, t} from 'testcafe';

class Page {
    constructor() {
        this.register_panel_header = Selector('div.panel-default').find('div.panel-heading');
        // Methods to interact with the form elements
        this.t = testcafe.t;

        this.getRegisterPanel = async () => {
            return await this.register_panel_header.innerText;
        }
    }
}

export default Page;
