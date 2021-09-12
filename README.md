# Viggoscrape

Python-dependent Node.js module for scraping *[Viggo](http://viggo.dk/)* assignments.

>This module is designed for **danish** users, and time will be adjusted to the **CET** timezone.

## Installation

### Dependencies

Viggoscrape depends on a few things, considering the core scraping function is written in python:

-  [Python 3.6 or higher](https://www.python.org/downloads/) - to run the code
-  [Pythonia](https://www.npmjs.com/package/pythonia) - a bridge between js and python
-  [Viggoscrape.py](https://pypi.org/project/viggoscrape/) - the original viggoscrape library for python
-  [fs-extra](https://www.npmjs.com/package/fs-extra) - for file handling

After installing python, let's install the dependencies:

```bash
python3 -m pip install --upgrade viggoscrape
npm install --upgrade pythonia fs-extra
```

### Installing the module

Now to actually install the module, it's pretty straightforward.

```bash
npm install --upgrade viggoscrape
```

Et voilà! You're almost ready to use viggoscrape, but first...

### A special requirement

Viggoscrape requires [ES6](https://www.w3schools.com/js/js_es6.asp) in order to be imported. If your project supports it, add this to your `package.json`:
```json
"type": "module"
```
If you can't do this, change the file extension of your JS file to .mjs.
This lets you import the module using `import` instead of `require`.

If you for, whatever reason, can't use ES6, refer to [this article](https://dev.to/antongolub/errrequireesm-4j0h).

## Quickstart

### Parameters

Viggoscrape uses the following keyword arguments:
-  `subdomain` - required
-  `keys` - required
-  `writeToFile` - `false` by default
-  `filePath` - only used if `writeToFile` is `true`. Default value is `"viggoscrape/assignmentData.json"`

#### `subdomain`

The subdomain is the very first part of the url for your viggo page.
Specify only the subdomain.

Like this:

`subdomain-example`

_**Not**_ like this:

`subdomain-example.viggo.dk`

#### `keys`

The `keys` parameter is your login info, and uses 2 pieces of information:
-  Username
-  Password

The info should be structured like so:
```js
{
    "USERNAME": "your username",
    "PASSWORD": "your password"
}
```

Don't worry, I won't steal your information 😏
###### Really, though, you can look through the [source code](https://github.com/NanguRepo/viggoscrape.py/blob/main/viggoscrape/src/viggoscrape.py) if you're unsure.

#### `writeToFile`
Optional boolean value specifying whether or not you'd like the output written to a json file.
When the value is `true`, the output will be written to the destination specified in `filePath` from the same directory as the function is called in. Default value is `false`, which will return the output.

#### `filePath`
Optional path only used if `writeToFile` is `true`. This is the path which the file will be written to. Default value is `"viggoscrape/assignmentData.json"`

### Usage examples
#### Direct output
We'll import the module, give it the required info, then log the output once the [promise](https://heynode.com/tutorial/what-are-promises/) is resolved.

```js
import getAssignments from 'viggoscrape';
var keys = {
    "USERNAME": "example@example.com",
    "PASSWORD": "Password1234"
};
getAssignments({subdomain:"example-subdomain", keys:keys})
.then(console.log);
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
    "url": ["https://example-subdomain.viggo.dk/Basic/HomeworkAndAssignment/Details/1234/#modal", "https://example-subdomain.viggo.dk/Basic/HomeworkAndAssignment/Details/1235/#modal"]
}
```
#### Output to file
We'll do the same thing as before, except this time, we add 2 arguments: writeToFile and filePath.

```javascript
import getAssignments from 'viggoscrape'
import * as fs from 'fs' // this will be used later
var keys = {
    "USERNAME": "example@example.com",
    "PASSWORD": "Password1234"
}
getAssignments({subdomain:"example-subdomain", keys:keys, writeToFile:true, filePath:"bing/bong.json"});
```

We won't get any output directly in the console, but we'll have a new file called `bong.json` in the `bing` directory with the same JSON in it - this can be used to bypass fiddly promise handling.

Now to actually read the file:
```js
fs.readFile("bing/bong.json", (err, data) => {
    if (err) throw err;
    let assignmentData = JSON.parse(data);
    console.log(assignmentData);
});
```
This will create the same output in the console as with the direct output example, but now you have a JSON object that you can reuse between instances.


Now, you can do anything you want with this newfound data, like create an embed for your [discord bot](https://github.com/nangurepo/fessor), or any other purpose. Just use the same index on all lists and the data should match.


