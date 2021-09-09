'use strict';

import { python } from 'pythonia'
import * as fs from 'fs';

export default async function getAssignments(subdomain, keys, writeToFile) {

    const viggoscrape = await python('viggoscrape');
    const output = await viggoscrape.get_assignments(subdomain, keys);
    python.exit();
    if (writeToFile === true) {
        let parsed = JSON.parse(output)
        let data = JSON.stringify(parsed, null, 2);
        fs.writeFile('assignmentData.json', data, (err) => {
            if (err) throw err;
            console.log('Data written to assignmentData.json');
        });
    }
    else {
        return JSON.stringify(JSON.parse(output), null, 2);
    }
}