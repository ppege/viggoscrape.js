'use strict';

import { python } from 'pythonia';
import * as fs from 'fs';
import fse from 'fs-extra';

export default async function getAssignments(options) {
    var writeToFile = options.writeToFile || false;
    var subdomain = options.subdomain;
    var keys = options.keys;
    var filePath = options.filePath || "viggoscrape/assignmentData.json";
    const viggoscrape = await python('viggoscrape');
    const output = await viggoscrape.get_assignments(subdomain, keys);
    python.exit();
    if (writeToFile === true) {
        let data = JSON.stringify(JSON.parse(output), null, 2);
        fse.outputFile(filePath, data)
            .then(() => {
                console.log(`Data written to ${options.filePath}`);
            })
            .catch(err => {
                console.log(err);
            })
    }
    else {
        return JSON.stringify(JSON.parse(output), null, 2);
    }
}