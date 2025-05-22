The 't.setPageLoadTimeout' method is deprecated and will be removed in the next major release. Use the 'test.timeouts' method to set the 'pageLoadTimeout' instead. 

/*
.testcaferc.json :
{
"baseUrl": "https://devexpress.github.io/testcafe/example/",
"userVariables": {
"url": "https://devexpress.github.io/testcafe/example/",
"url_2": "https://the-internet.herokuapp.com/iframe",
"url_3": "https://the-internet.herokuapp.com/upload",
"url_4": "https://demoqa.com/login"
},
"browsers": [
"chrome",
"firefox"
],
"src": [
"C:\\Users\\chaker\\Desktop\\qase\\TAU-Testcafe\\tests/**/*.js"
],
"filter": {
"testMeta": {
"testID": "tmagento2-001"
}
},
"filter": {
"fixtureMeta": {
"fixtureID": "fmagento2-0001"
}
},
"selectorTimeout": 10000,
"reporter": [
{
"name": "spec"
},
{
"name": "json",
"output": "reports/report.json"
}
],
"debugMode": false,
"screenshots": {
"path": "C:\\Users\\chaker\\Desktop\\qase\\TAU-Testcafe\\screenshots\\FireBearStudioDemo",
"takeOnFails": true,
"pathPattern": "${DATE}_${TIME}/test-${TEST_INDEX}/${USERAGENT}/${FILE_INDEX}.png",
"pathPatternOnFails": "${DATE}_${TIME}/failedTests/test-${TEST_INDEX}/${USERAGENT}/${FILE_INDEX}.png",
"thumbnails": false
},
"skipJsErrors": true,
"speed": 0.1
}
*/
------------------------------------------------------------------------------------------------------------------------
fixture`Test.timeouts`
.page`https://devexpress.github.io/testcafe/example`;

test('My test', async () => {
/* ... */
}).timeouts({
pageLoadTimeout:    2000,
pageRequestTimeout: 60000,
ajaxRequestTimeout: 60000,
});
