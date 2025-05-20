import createTestCafe from "testcafe";

const testcafe = await createTestCafe();
const runner = testcafe.createRunner();


await createTestCafe().then(async () => {
        const failedCount = await runner
            .src(['tests/firstTest.js'])
            .browsers(['chrome'])
            .run();

        console.log(failedCount);
        await testcafe.close();
    }
)
