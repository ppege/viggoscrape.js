# Viggoscrape

Node.js module for scraping *[Viggo](http://viggo.dk/)* assignments by interacting with the [Viggoscrape API](https://github.com/nangurepo/viggoscrapeapi).
>The API is designed for **danish** users, and time will be adjusted to the **CET** timezone.

## Installation

### Dependencies

-  [node-fetch](https://www.npmjs.com/package/node-fetch) - for file handling

### Installing the module

Installing the module is done like this:

```bash
npm install --upgrade viggoscrape
```

## Quickstart

### Parameters

Required arguments:
-  `subdomain`
-  `username`
-  `password`

Optional arguments:
-  `date`
-  `version`

The subdomain is the very first part of the url for your viggo page.
Specify only the subdomain.

Like this:

`subdomain-example`

_**Not**_ like this:

`subdomain-example.viggo.dk`

### Usage example
We'll import the module, give it the required info, then log the output once the [promise](https://heynode.com/tutorial/what-are-promises/) is resolved.

```javascript
import getAssignments from 'viggoscrape';
var keys = {
    "subdomain": "example-subdomain",
    "username": "example@example.com",
    "password": "Password1234"
};
getAssignments(keys)
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });
```

Our console output would look something like this:
```json
{
    "subject": ["English", "Math"],
    "time": ["31. aug 12:00", "2. sep 08:55"],
    "description": ["Read pages 30 and 31", "Finish A, B and C"],
    "author": ["28. aug 11:25 by John Doe", "31. aug 15:30 by Peter Anker"],
    "files": ["None", "example.com/algebra.pdf"],
    "file_names": ["None", "Intro to algebra"],
    "url": ["https://example-subdomain.viggo.dk/Basic/HomeworkAndAssignment/Details/1234/#modal", "https://example-subdomain.viggo.dk/Basic/HomeworkAndAssignment/Details/1235/#modal"],
    "errors": null
}
```
This is an object and does not need to be parsed.

