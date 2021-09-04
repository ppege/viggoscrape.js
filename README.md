# Viggoscrape

Node.js module for scraping *[Viggo](http://viggo.dk/)* assignments.

>This module is designed for **danish** users, and time will be adjusted to the **CET** timezone.

## Quickstart

### Information syntax

To use Viggoscrape, you need to provide it with login info and a subdomain.

#### Subdomain

For your subdomain, specify only the subdomain, like this:

`subdomain-example`

And not like this:

`subdomain-example.viggo.dk`

#### Login info

The login info uses 2 pieces of information:
-  Username
-  Password

### Usage example

Let's try this out! We'll import the module, give it the required info, then log the output once the promise is resolved.

```javascript
import getAssignments from 'viggoscrape'
var subdomain = "nr-aadal"
var loginInfo = {
    "USERNAME": "example@example.com",
    "PASSWORD": "Password1234"
}
getAssignments(subdomain, loginInfo)
.then(console.log);
```

Our output would look something like this:
```json
{
    "subject": ["English", "Math"],
    "time": ["31. aug 12:00", "2. sep 08:55"],
    "description": ["Read pages 30 and 31", "Finish A, B and C"],
    "author": ["28. aug 11:25 by John Doe", "31. aug 15:30 by Peter Anker"],
    "files": ["None", "example.com/algebra.pdf"],
    "file_names": ["None", "Intro to algebra"],
    "url": ["https://example-subdomain.viggo.dk/Basic/HomewordAndAssignment/Details/1234/#modal", "https://example-subdomain.viggo.dk/Basic/HomewordAndAssignment/Details/1235/#modal"]
}
```

Now, you can do anything you want with this newfound data, like save it to a json file, create an embed for your [discord bot](https://github.com/nangurepo/fessor), or any other purpose. Just use the same index on all lists and the data should match.

## Dependencies

-  Python
-  [Pythonia](https://www.npmjs.com/package/pythonia)
-  [Viggoscrape.py](https://pypi.org/project/viggoscrape/)