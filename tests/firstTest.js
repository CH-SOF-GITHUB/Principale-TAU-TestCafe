import {test, Selector} from "testcafe";
import XpathSelector from "../utils/xpath-selector";

fixture('tau first fixture')
    .meta("fixtureID", "f-0001")
    .meta({author: "Chaker Ben Said", creationDate: "20/05/2025"})
    .page("https://devexpress.github.io/testcafe/example/");

// Selector for the elements
const developerName = Selector("#developer-name");
const osMacos = Selector("#macos");
const submitButton = Selector("#submit-button");
//
const featureOption = Selector("#remote-testing");
const interfaceSelect = Selector('#preferred-interface');
const interfaceSelectOption = interfaceSelect.find('option');
const ITriedCheckbox = Selector("#tried-test-cafe");

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
