import {test} from 'testcafe';
import homePage from '../page-model/blazedemohome.js';
import loginPage from '../page-model/blazedemologin.js';
import registerPage from '../page-model/blazedemoregister.js';

fixture("Fixture 001 register for BlazeDemo app")
    .meta('fixtureID', 'ffbz-001')
    .page('https://blazedemo.com/')

// declare pages model in instance
let home_page = new homePage();
let login_page = new loginPage();
let register_page = new registerPage();


test("check panel text in register form", async t => {
    await home_page.click_home_link();
    await login_page.clickRegisterLink();
    let panelText = await register_page.getRegisterPanel();
    await t.expect(panelText).eql('Register', 'Panel text does not match expected value');
});
