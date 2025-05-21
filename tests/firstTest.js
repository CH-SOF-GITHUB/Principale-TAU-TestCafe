import {test, Selector} from "testcafe";
import XpathSelector from "../utils/xpath-selector";

const {userVariables} = require('testcafe');

fixture('tau first fixture')
    .meta("fixtureID", "f-0001")
    .meta({author: "Chaker Ben Said", creationDate: "20/05/2025"})
    .page(String(userVariables.url));

// Selector for the elements
const developerName = Selector("#developer-name");
const osMacos = Selector("#macos");
const submitButton = Selector("#submit-button");
//
const featureOption = Selector("#remote-testing");
const interfaceSelect = Selector('#preferred-interface');
const interfaceSelectOption = interfaceSelect.find('option');
const ITriedCheckbox = Selector("#tried-test-cafe");

//const headerH1 = xpath('//*[@id="main-form"]/div/header/h1');

test
    .meta('testID', 't-0001')
    .meta('env', 'production')
    .meta({severity: 'critical', testedAPIVersion: '1.0'})
    ('tau first test: enter name, check os and click submit', async t => {
        await t
            .typeText(developerName, "John Doe")
            .click(osMacos)
            .click(submitButton);

        setTimeout(() => {
            console.log("devexpress form submitted");
        }, 5000);
    });

test.meta('testID', 't-0002')
    .meta('env', 'production')
    .meta({severity: 'critical', testedAPIVersion: '1.0'})
    ('check features, select interface, check tried testcafe', async t => {
        await t
            .click(featureOption)
            .click(interfaceSelect)
            .click(interfaceSelectOption.withText('JavaScript API'))
            .click(ITriedCheckbox)
    })

test.meta('testID', 't-0003')
    .meta('env', 'production')
    .meta('tag', '@Hover')
    ('interact with DOM elements', async t => {
        await t
            .hover(XpathSelector('//*[@id="main-form"]/div/header/h1'))
            .hover('#populate')
        console.log("hovered on the title and populate button");
    });

test.meta('testID', 't-0004')
    .meta('env', 'production')
    .meta('testName', 'Interact with DOM elements')
    ('navigate to specific URL', async t => {
        await t
            .navigateTo("https://testcafe.io/documentation/402635/guides/overview/getting-started")
            .wait(30000)
        console.log("navigated to testcafe documentation");
    });
