import {ClientFunction} from 'testcafe';
import productDetailsPage from "../page-model/productDetails.js"
import productPage from "../page-model/product.js";

// declare url of testcafe
const URL = "https://magento2demo.firebearstudio.com/";
const getURL = ClientFunction(() => window.document.documentURI);


// Implement Register Test with Page Model
let product_page = new productPage();
let product_details = new productDetailsPage();


fixture("Fixture add product")
    .meta('fixtureID', 'fmagento2-0004')
    .meta({author: 'Chaker Ben Said', creationDate: '22/05/2025'})
    .page(URL)
    .beforeEach(async t => {
        await t
            .maximizeWindow();
    });

// sample example of data-driven of products
// let product = "Aim Analog Watch";
let dataSet = ["Aim Analog Watch", "Endurance Watch", "Summit Watch", "Dash Digital Watch"];

/*
let product_to_test = product.toLowerCase();
for (let i = 0; i < product_to_test.length; i++) {
    if (product_to_test[i] === ' ') {
        product_to_test = product_to_test.replace(' ', '-');
    }
}
*/

dataSet.forEach(prod => {
    test
        .meta('testID', 'tmagento2-008')
        (`Search and add a new product : ${prod}`, async t => {
            // search for product named "Aim Analog Watch"
            await product_page.search_product(prod);
            await product_page.click_product_link(prod);
            let current_product_url = await getURL();
            let product_in_url = await product_page.display_product_name(prod);
            await t
                .expect(current_product_url).eql(`https://magento2demo.firebearstudio.com/${product_in_url}.html`)
                .takeScreenshot();
        });
});
