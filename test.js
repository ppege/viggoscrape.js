import { getAssignments, getAttributes } from './index.js'
let password = 'CLASSIFIED'











getAssignments({
    'subdomain': 'nr-aadal',
    'username': 'williamiam3@hotmail.com',
    'password': password,
    'date': '2021-03-14'
})
.then((data) => {
    console.log(data.length);
})
.catch((err) => {
    console.log(err);
});