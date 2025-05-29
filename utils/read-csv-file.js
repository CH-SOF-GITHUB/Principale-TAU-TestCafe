import fs from 'fs';
import csv from 'csv-parser';

export default function read(copyfile) {
    return new Promise((resolve, reject) => {
        const results = [];
        fs.createReadStream(copyfile)
            .pipe(csv())
            .on('data', (row) => {
                results.push(row);
            })
            .on('end', () => {
                console.log('CSV file successfully processed');
                resolve(results);
            })
            .on('error', (err) => {
                reject(err);
            });
    });
}
