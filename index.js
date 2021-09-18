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
    if (("USERNAME" in keys && "PASSWORD" in keys) === false) {
        throw 'Keys need a USERNAME value and a PASSWORD value.'
    }
    const viggoscrape = await python('viggoscrape');
    const output = await viggoscrape.get_assignments(subdomain, keys);
    python.exit();
    
    if (output === "Invalid credentials") {
        throw output;
    } else {
        return JSON.stringify(JSON.parse(output), null, 2);
    }

}