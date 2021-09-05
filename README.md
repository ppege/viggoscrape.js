# Viggoscrape

Python-dependent Node.js module for scraping *[Viggo](http://viggo.dk/)* assignments.

>This module is designed for **danish** users, and time will be adjusted to the **CET** timezone.

## Quickstart

### Installation

#### Dependencies

Viggoscrape depends on a few things, considering the core scraping function is written in python:

-  [Python 3.6 or higher](https://www.python.org/downloads/) - to run the code
-  [Pythonia](https://www.npmjs.com/package/pythonia) - a bridge between js and python
-  [Viggoscrape.py](https://pypi.org/project/viggoscrape/) - the original viggoscrape library for python

After installing python, let's install the dependencies:

```bash
python3 -m pip install --upgrade viggoscrape
npm install --upgrade pythonia
```

#### Installing the module

Now to actually install the module, it's pretty straightforward.

```bash
npm install --upgrade viggoscrape
```

Et voilà! You're almost ready to use viggoscrape, but first...

#### A special requirement

Viggoscrape requires [ES6](https://www.w3schools.com/js/js_es6.asp) in order to be imported. If your project supports it, add this to your `package.json`:
```json
"type": "module"
```
This lets you import the module using `import` instead of `require`.

If you for, whatever reason, can't use ES6, refer to [this article](https://dev.to/antongolub/errrequireesm-4j0h).

### Information syntax

To use Viggoscrape, you need to provide it with login info and a subdomain.

#### Subdomain

The subdomain is the very first part of the url for your viggo page.
Specify only the subdomain.

Like this:

`subdomain-example`

_**Not**_ like this:

`subdomain-example.viggo.dk`

#### Login info

The login info uses 2 pieces of information:
-  Username
-  Password

These would, of course, be the username and password you use to login to viggo normally. Don't worry, I won't steal your information 😏
###### Really, though, you can look through the [source code](https://github.com/NanguRepo/viggoscrape.py/blob/main/viggoscrape/src/viggoscrape.py) if you're unsure.

### Usage example

Let's try this out! We'll import the module, give it the required info, then log the output once the [promise](https://heynode.com/tutorial/what-are-promises/) is resolved.

```javascript
import getAssignments from 'viggoscrape'
var subdomain = "example-subdomain"
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


