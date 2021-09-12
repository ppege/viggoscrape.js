'use strict';

import { python } from 'pythonia';

export default async function getAssignments(options) {
    try {
        var subdomain = options.subdomain;
        var keys = options.keys;
    } catch {
        throw 'You are required to pass subdomain and keys to the function.';
    }
    if (subdomain == null || keys == null) {
        throw 'Subdomain and keys are required!';
    }
    if (keys.constructor != Object) {
        console.log(keys.constructor);
        throw 'Keys needs to be a dictionary!'
    }
    const viggoscrape = await python('viggoscrape');
    const output = await viggoscrape.get_assignments(subdomain, keys);
    python.exit();
    
    return JSON.stringify(JSON.parse(output), null, 2);
}