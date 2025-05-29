import {test, fixture} from "testcafe";
import homePage from '../page-model/amastyhome.js';
import formPage from '../page-model/amastyform.js';


fixture("Amasty Fixture register 001")
    .meta('fixtureID', 'fmasty-001')
    .page('https://amasty.com/')
    .beforeEach(async t => {
        await t
            .maximizeWindow()
            .wait(10000);
    });

// declare instances from page model classes
let home_page = new homePage();
let form_page = new formPage();

test('click in Log In icon in navbar and check opened form', async t => {
    //await t.deleteCookies('amcookie_policy_restriction');
    await home_page.click_cookie();
    await home_page.click_sign_in_link();
    await form_page.click_register_form_link();
    await t.expect(form_page.registerText.exists).ok();
});

test('click in Login In icon in navbar and check form exists', async t => {
    await home_page.click_cookie();
    await home_page.click_sign_in_link();
    await t.expect(form_page.form_exist_by_role.getAttribute('role')).eql('dialog', 'Form with role dialog not match');
});

test('click in Login In icon in navbar and check link forgot password exists', async t => {
    await home_page.click_cookie();
    await home_page.click_sign_in_link();
    await t.expect(form_page.form_forgotpwd_link.visible).ok();
});

test('click in Login In icon in navbar and check First Name input exists', async t => {
    await home_page.click_cookie();
    await home_page.click_sign_in_link();
    await form_page.click_register_form_link();
    await t
        .expect(form_page.firstname_input.visible).ok()
        .expect(form_page.firstname_input.getAttribute('placeholder')).eql('First Name');
});

test('click in Login In icon in navbar and check Last Name input exists', async t => {
    await home_page.click_cookie();
    await home_page.click_sign_in_link();
    await form_page.click_register_form_link();
    await t
        .expect(form_page.lastname_input.visible).ok()
        .expect(form_page.lastname_input.getAttribute('placeholder')).eql('Last Name');
});

test('click in Login In icon in navbar and check Email input exits', async t => {
    await home_page.click_cookie();
    await home_page.click_sign_in_link();
    await form_page.click_register_form_link();
    await t
        .expect(form_page.email_address_input.visible).ok()
        .expect(form_page.email_address_input.getAttribute('placeholder')).eql('Email');
});

test('click in Login In icon in navbar and check Password input exists', async t => {
    await home_page.click_cookie();
    await home_page.click_sign_in_link();
    await form_page.click_register_form_link();
    await t
        .expect(form_page.password_input.visible).ok()
        .expect(form_page.password_input.getAttribute('placeholder')).eql('Password');
});

test('click in Login In icon in navbar and check Confirm Password input exists', async t => {
    await home_page.click_cookie();
    await home_page.click_sign_in_link();
    await form_page.click_register_form_link();
    await t
        .expect(form_page.confirm_password_input.visible).ok()
        .expect(form_page.confirm_password_input.getAttribute('placeholder')).eql('Confirm Password');
});
