import {test, Selector, userVariables, ClientFunction} from 'testcafe';

const setLocalStorageItem = ClientFunction((key, value) => window.localStorage.setItem(key, value));
const getStoredValue = ClientFunction((key) => window.localStorage.getItem(key));
const currentTitle = ClientFunction(() => document.title);
const currentUrl = ClientFunction(() => document.documentURI);

fixture`Working with client side function`
    .page(String(userVariables.url_4))
    .beforeEach(async t => {
        //await t.maximizeWindow();
        await setLocalStorageItem("mode", "test");
    });

test.meta('testID', 't-0009')
('check local storage values', async t => {
    await t.expect(await getStoredValue("mode")).eql('test', 'local storage value is not correct');
});

test.meta('testID', 't-0010')
('check current Title of Login Page', async t => {
    const actual_title = await currentTitle();
    const actual_url = await currentUrl();
    console.log(`actual title: ${actual_title} && actual url: ${actual_url} of login demoqa page`);
    await t
        .expect(actual_title).eql("DEMOQA", 'Document Title is not correct')
        .expect(actual_url).eql("https://demoqa.com/login", "URL is not correct")
        .wait(5000)
});
