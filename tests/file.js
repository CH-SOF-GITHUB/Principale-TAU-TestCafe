import read from "../utils/read-csv-file.js";

//let file = "C:\\Users\\chaker\\Desktop\\qase\\TAU-Testcafe\\utils\\data.csv";

// Example usage:
async function main() {
    try {
        const data = await read('C:\\Users\\chaker\\Downloads\\datadriven.csv');
        console.log('Data:', data);
    } catch (err) {
        console.error('Error reading CSV:', err);
    }
}

await main();
