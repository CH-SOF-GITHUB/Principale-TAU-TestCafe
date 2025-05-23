import testcafe, {Selector, t} from "testcafe";


class Page {
    constructor() {
        this.t = testcafe.t;
        this.cartIcon = Selector('div.minicart-wrapper');
        this.cart_empty_items = Selector('strong').withText('You have no items in your shopping cart.');
        this.cart_quantity_items = Selector('div.items-total').find('span.count');
        this.cart_subTotal_items = Selector('div.price-container').find('span.price-wrapper').find('span.price');
        this.cart_trash_item = Selector('div.secondary').find('a[title="Remove item"]');
        this.view_and_edit_cart = Selector('a').withText('View and Edit Cart');
        //
        this.ProductName_toLocate = Selector('body').child('.page-wrapper').child('.page-main').find('span.base[data-ui-id="page-title-wrapper"]');

        // 1° Method click on cart icon
        this.click_cart_icon = async () => {
            await t.click(this.cartIcon);
            console.log(`STEP 5: Click on cart icon`);
        }

        // 2° Method return total quantity of items in cart
        this.cart_total_quantity = async (prod) => {
            if (await this.ProductName_toLocate.innerText === prod)
                return Number(await this.cart_quantity_items.innerText);
        }

        // 3° Method return total price of items in cart
        let matchPrice = async () => (await this.cart_subTotal_items.innerText).match(/[\d,.]+/);
        this.cart_total_price = async (prod) => {
            if (await this.ProductName_toLocate.innerText === prod) {
                const priceMatch = await matchPrice();
                return priceMatch ? Number(priceMatch[0].replace(',', '')) : NaN;
            }
        };

        // 4° Method return the name of product in cart
        this.cart_product_name = async (prod) => {
            this.cart_item_name = Selector('strong.product-item-name').find('a').withText(prod);
            if (await this.ProductName_toLocate.innerText === prod)
                return this.cart_item_name.innerText;
        }
    }

}

export default Page;
