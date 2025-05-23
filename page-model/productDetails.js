import testcafe, {Selector, t, ClientFunction} from "testcafe";

class Page {
    constructor() {
        this.t = testcafe.t;
        //this.productPrice = Selector("span[id='price-value-4']")
        //this.prductQuantity = Selector('input#product_enteredQua
        //this.addToCart = Selector("input[id='add-to-cart-button-
        //this. successMessage = Selector ('div.bar-notification.suc
        this.productTitle = Selector('h1').find("span[itemprop='name']");
        this.productPrice = Selector('span.price');
        this.productQuantity = Selector('div.qty').find('div.control').find('input[id="qty"]');
        this.addToCart = Selector('div.actions').find('button[title="Add to Cart"]');
        this.successMessage = Selector('div[data-bind="scope: \'messages\'"]').find('div.messages').find("div.message-success").find("div[data-bind='html: $parent.prepareMessageForHtml(message.text)']");
        this.add_to_wish_list = Selector("//a[@class='action towishlist']");
        //
        this.ProductName_toLocate = Selector('body').child('.page-wrapper').child('.page-main').find('span.base[data-ui-id="page-title-wrapper"]');

        // 1° Method increase quantity of product
        this.increase_product_quantity = async (qte) => {
            const initial_qte = Number(await this.productQuantity.value);
            const qte_add = Number(qte);
            const sum = initial_qte + qte_add;
            if (await this.productQuantity.value > 0 && qte > 0) {
                await t
                    .click(this.productQuantity, {caretPos: 1})
                    .pressKey('ctrl+a delete')
                    .typeText(this.productQuantity, (sum).toString(), {paste: true});
            }
            console.log(`STEP 3: increase product quantity to : ${await this.productQuantity.value}`);
        }

        // 2° Method add product to cart
        this.add_to_cart = async (prod) => {
            if (await this.ProductName_toLocate.innerText === prod)
                await t
                    .click(this.addToCart)
                    .wait(5000);
            console.log(`STEP 4: Add To Cart clicked to add to cart: '${prod}'`);
        }
        // //
    }
}

export default Page;
