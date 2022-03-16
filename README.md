# Viggoscrape.js

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

### Usage example
We'll import the module, give it the required info, then log the output once the [promise](https://heynode.com/tutorial/what-are-promises/) is resolved.

```javascript
import {getAssignments} from 'viggoscrape';
getAssignments({
     'subdomain': 'example-subdomain',
     'username': 'viggouser@example.com',
     'password': 'verysecretpassword',
     'date': '2021-03-14'
 })
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    }); 
```

Our console output would look something like this:
```json
[
    {
        "author": "14. mar 2021 11:09 by Teacher McTeacher",
        "date": "Monday 16. Mar",
        "description": "Read this and that blablabla, here are some links: https://github.com/nangurepo/ https://viggoscrape.xyz/",
        "subject": "History",
        "time": "10:45 - 11:30",
        "url": "https://subdomain-example.viggo.dk/Basic/HomeworkAndAssignment/Details/1234/#modal"
    },
    {
        "author": "17. mar 2021 18:09 by Other Teacher",
        "date": "Tuesday 20. Mar",
        "description": "Read page 170-200 of 'To kill a mockingbird'",
        "subject": "English",
        "time": "12:00 - 12:45",
        "url": "https://subdomain-example.viggo.dk/Basic/HomeworkAndAssignment/Details/5678/#modal"
    }
]
```
This is an array of objects that represent viggo assignments. Using `getAttributes()` instead of `getAssignments()` will give this result instead:

```json
{
    "subject": ["History", "English"],
    "date": ["Monday 16. Mar", "Tuesday 20. Mar"],
    "description": ["Read this and that blablabla, here are some links: https://github.com/nangurepo/ https://viggoscrape.xyz/", "Read page 170-200 of 'To kill a mockingbird'"],
    "author": ["14. mar 2021 11:09 by Teacher McTeacher", "17. mar 2021 18:09 by Other Teacher"],
    "url": ["https://subdomain-example.viggo.dk/Basic/HomeworkAndAssignment/Details/1234/#modal", "https://subdomain-example.viggo.dk/Basic/HomeworkAndAssignment/Details/5678/#modal"]
}
```
This is an object containing arrays that represent each attribute of all the assignments. The indexes match, so `subject[1]` and `date[1]` are from the same assignment.
