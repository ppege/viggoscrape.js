'use strict';

import fetch from 'node-fetch';

export async function getAssignments(options) {
    return getData(options, false)
}
export async function getAttributes(options) {
    return getData(options, true)
}

async function getData(options, attributes) {
    if (options === undefined) {
        throw new SyntaxError("Options must be passed");
    }
    let subdomain = options.subdomain || null;
    let username = options.username || null;
    let password = options.password || null;
    let version = options.version || "v2";
    let date = options.date || null;
    let url = `http://viggoscrape.xyz/api/${version}/scrape?date=${date}&subdomain=${subdomain}&username=${username}&password=${password}`;
    if (attributes === true) { url += '&groupByAssignment=0' }
    const response = await fetch(url);
    const data = await response.json();
    if (data.errors !== undefined) { 
        throw new Error(data.errors)
    } else {
        return data;
    }
}