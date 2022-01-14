'use strict';

import fetch from 'node-fetch';

/**
 * Get an array of assignments
 * @param {object} options Has to include subdomain, username and password.
*/
export async function getAssignments(options) {
    return getData(options, false);
}

/**
 * Get an object of attributes
 * @param {object} options Has to include subdomain, username and password.
*/
export async function getAttributes(options) {
    return getData(options, true);
}

/**
 * Get the data from viggoscrape.xyz
 * @param {object} options The login information.
 * @param {boolean} attributes Whether or not to group by attributes
 * @return {object|array} The data from viggoscrape.xyz
 */
async function getData(options, attributes) {
    if (options === undefined) {
        throw new SyntaxError('Options must be passed');
    }
    const subdomain = options.subdomain || null;
    const username = options.username || null;
    const password = options.password || null;
    const version = options.version || 'v2';
    const date = options.date || null;
    let url = `http://viggoscrape.xyz/api/${version}/scrape?date=${date}&subdomain=${subdomain}&username=${username}&password=${password}`;
    if (attributes === true) {
        url += '&groupByAssignment=0';
    }
    const response = await fetch(url);
    const data = await response.json();
    if (data.errors !== undefined) {
        throw new Error(data.errors);
    } else {
        return data;
    }
}
