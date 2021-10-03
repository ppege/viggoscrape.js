'use strict';

import fetch from 'node-fetch';

export default async function getAssignments(keys) {
    var errors = []
    if (keys == null) {
        errors.push('Keys are required!');
    }

    if (keys.constructor != Object) {
        errors.push('Keys needs to be a dictionary!')
    }

    if (("subdomain" in keys && "username" in keys && "password" in keys) === false) {
        errors.push('Keys need a subdomain value, a username value and a password value.')
    }

    if (errors.length !== 0) {
        return {"errors":errors}
    }

    let url = `https://viggoscrape.xyz/api/v1/scrape?subdomain=${keys['subdomain']}&username=${keys['username']}&password=${keys['password']}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;

}