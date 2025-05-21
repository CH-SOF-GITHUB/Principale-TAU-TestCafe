import {test, Selector, userVariables} from 'testcafe';

// declare of web elements
const developerInput = Selector("#developer-name");
const triedCheckbox = Selector('#tried-test-cafe');
const slider = Selector('#slider');

fixture(`Interact With the Page with Hooks`)
    .page(String(userVariables.url))
    .beforeEach(async t => {
        await t
            .maximizeWindow()
            .expect(developerInput.value).eql('', 'input is empty')
            .typeText(developerInput, 'Drog and Drop Test')
            .expect(developerInput.value).eql('Drog and Drop Test', 'input is not empty')
            .takeElementScreenshot(developerInput)
    })
    .afterEach(async t => {
        await t.click(triedCheckbox)
    });

test
    .meta('testID', 't-0008')
    ('Drag test', async t => {
        await t
            .click(triedCheckbox)
            .drag(slider, 360, 0, {offsetX: 10, offsetY: 10})
            .takeElementScreenshot(slider)
            .takeScreenshot()
    });

// All tests in this fixture are skipped
fixture`Fixture 2`;

test('Fixture 2 -- Test 1', async t => {
    console.log("Fixture 2 -- Test 1");
});
test('Fixture 2 -- Test 2', async t => {
    console.log("Fixture 2 -- Test 2");
});
