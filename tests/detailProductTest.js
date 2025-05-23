import {test, ClientFunction, t} from "testcafe";
import productPage from "../page-model/product.js";
import productDetailsPage from "../page-model/productDetails.js";


// declare url of testcafe
const URL = "https://magento2demo.firebearstudio.com/";
const getURL = ClientFunction(() => window.document.documentURI);


// Implement Register Test with Page Model
let product_page = new productPage();
let product_details = new productDetailsPage();


fixture("Fixture details product")
    .meta('fixtureID', 'fmagento2-0005')
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
    ("display details of product correctly", async t => {
        await product_page.search_product(product);
        await product_page.click_product_link(product);
        await t
            .expect(product_details.productTitle.exists).ok()
            .takeElementScreenshot(product_details.productTitle);
        await t
            .expect(product_details.productPrice.exists).ok()
            .takeElementScreenshot(product_details.productPrice);
        await t
            .expect(product_details.productQuantity.exists).ok()
            .takeElementScreenshot(product_details.productQuantity);
        await t
            .expect(product_details.addToCart.exists).ok()
            .takeElementScreenshot(product_details.addToCart);
        await t
            .click(product_details.add_to_wish_list);
    });

test
    .meta('testID', 'tmagento2-010')
    ("check details values of product correct", async t => {
        await product_page.search_product(product);
        await product_page.click_product_link(product);
        await t
            .expect(product_details.productTitle.innerText).eql("Aim Analog Watch")
            .expect(product_details.productPrice.innerText).eql("$45.00");
        await product_details.increase_product_quantity(10);
        await t
            .expect(product_details.productQuantity.value).eql("11");
    });


test
    .meta('testID', 'tmagento2-011')
    ("check product added in cart with success", async t => {
        await product_page.search_product(product);
        await product_page.click_product_link(product);
        await product_details.add_to_cart(product);
        await t
            .expect(product_details.successMessage.visible).ok()
            .takeElementScreenshot(product_details.successMessage);
    });

test
    .meta('testID', 'tmagento2-012')
    ("verify product added to cart and validate details", async t => {
        await product_page.search_product(product);
        await product_page.click_product_link(product);
        await product_details.add_to_cart(product);
        await t.expect(product_details.successMessage.visible).ok();
    });
