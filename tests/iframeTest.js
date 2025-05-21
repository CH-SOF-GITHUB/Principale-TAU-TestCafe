import {test, userVariables, Selector} from "testcafe";

fixture("Second fixture")
    .page(String(userVariables.url_2))

test
    .meta('testID', 't-0005')
    ("test iframe", async t => {
        // declare a web element iframe
        let tox_button = Selector(".tox-notification__dismiss");
        let iframe = Selector("iframe#mce_0_ifr");
        let inputText = Selector("body#tinymce.mce-content-body mce-content-readonly");
        // close the notification popup && Switch to an iframe
        await t
            .click(tox_button)
            .switchToIframe(iframe)
            .click(inputText)
            .pressKey("ctrl+a delete")
            .typeText(inputText, "Hello World from iframe")
            .expect(inputText.innerText).contains("World")
            .switchToMainWindow();
    });
