import {Selector} from "testcafe";

class Page {
    constructor() {
        // General selectors
        this.orderLink = Selector(".customer-orders");
        this.no_order_message = Selector(".no-data");
    }
}

export default Page;
