import testcafe, {Selector, t} from "testcafe";

class Page {
    constructor() {
        this.search_product_input = Selector("input[id='search']");

        this.t = testcafe.t;

        // Methods to interact with the page model
        this.search_product = async (productName) => {
            await t
                .typeText(this.search_product_input, productName)
                .pressKey('enter');
            console.log(`STEP 1:  enter product name : ${productName}`);
        }

        this.click_product_link = async (productName) => {
            this.product_item_link = Selector('a').withText(productName);
            await t.click(this.product_item_link);
            console.log(`STEP 2: click on product link : ${productName}`);
        }

        this.display_product_name = (product) => {
            let new_product_name = product.toLowerCase();
            for (let i = 0; i < new_product_name.length; i++) {
                if (new_product_name[i] === ' ') {
                    new_product_name = new_product_name.replace(' ', '-');
                }
            }
            return new_product_name;
        }
    }
}

export default Page;
