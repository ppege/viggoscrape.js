import getAssignments from './index.js';

getAssignments({subdomain:"bla", keys:{"a": "b"}})
.catch((err) => console.log(err));