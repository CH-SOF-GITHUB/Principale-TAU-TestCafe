import {test, Selector, userVariables} from "testcafe";


fixture('Dropdown list test')
    .page(String(userVariables.url));

const interface_list = Selector("#preferred-interface");
const interface_option = interface_list().find("option");

test
    .meta('testID', 't-0006')
    ("select option in interface list", async t => {
        await t
            .click(interface_list())
            .click(interface_option.withText("Both"))
            .expect(interface_list.value).eql("Both")

        console.log("test cafe interface Both option selected");
    });


const file_upload = Selector("#file-upload");
const upload_button = Selector("#file-submit");
const uploaded_files = Selector("#uploaded-files");
test.page(String(userVariables.url_3))
    .meta("testID", "t-0007")
    ("check upload file", async t => {
        await t
            .setFilesToUpload(file_upload(), "C:\\Users\\chaker\\Desktop\\qase\\TAU-Testcafe\\uploads\\text-file-1.txt")
            .click(upload_button)
            .expect(uploaded_files.innerText).eql("text-file-1.txt")
    });
