import createTestCafe from "testcafe";

const testcafe = await createTestCafe();
const runner = testcafe.createRunner();


createTestCafe().then(() => {
    return runner
        .src(['tests/firstTest.js --test-meta tag=@Hover'])
        .browsers(['firefox'])
        .filter((testName, fixtureName, fixturePath, testMeta) => {
            return testMeta.tag === '@Hover' && testMeta.testID === 't-0003';
        })
        .run({
            skipJsErrors: true
        })
        .then((failedCount) => {
            console.log('Tests failed: ' + failedCount);
            return testcafe.close();
        });
});
