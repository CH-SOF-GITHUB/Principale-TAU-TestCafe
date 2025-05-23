import {test} from "testcafe";
import productPage from "../page-model/product.js";
import productDetailsPage from "../page-model/productDetails.js";
import cartPage from "../page-model/cart.js";

// declare url of testcafe
const URL = "https://magento2demo.firebearstudio.com/";


// Implement Register Test with Page Model
let product_page = new productPage();
let product_details = new productDetailsPage();
let cart_page = new cartPage();

fixture("Fixture sample display cart 1")
    .meta('fixtureID', 'fmagento2-0006')
    .meta({author: 'Chaker Ben Said', creationDate: '22/05/2025'})
    .page(URL)
    .beforeEach(async t => {
        await t
            .maximizeWindow();
    });

// example of product name to test
let product = "Aim Analog Watch";

test
    .meta('testID', 'tmagento2-009')
    ("test 1: display product in cart", async t => {
        await product_page.search_product(product);
        await product_page.click_product_link(product);
        await product_details.add_to_cart(product);
        await t.expect(product_details.successMessage.visible).ok();
        await cart_page.click_cart_icon();
        await t
            .expect(await cart_page.cart_total_quantity(product)).eql(1)
            .expect(await cart_page.cart_total_price(product)).eql(45.00)
            .expect(await cart_page.cart_product_name(product)).eql("Aim Analog Watch")
            .takeScreenshot();
    });
/*
test
    .meta('testID', 'tmagento2-009')
    ("test 1: display product in cart", async t => {
        await product_page.search_product(product);
        await product_page.click_product_link(product);
        await product_details.add_to_cart(product);
        await t.expect(product_details.successMessage.visible).ok();
        await cart_page.click_cart_icon();
        await t
            .expect(cart_page.cart_quantity_items.exists).ok()
            .expect(cart_page.cart_quantity_items.innerText).eql("1")
            .expect(cart_page.cart_subTotal_items.exists).ok()
            .expect(cart_page.cart_subTotal_items.innerText).eql("$45.00")
            .expect(cart_page.cart_item_name.exists).ok()
            .expect(cart_page.cart_item_name.innerText).eql(product)
            .takeScreenshot();
    });
 */
