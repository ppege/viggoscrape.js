const request1 = require('request')
const request = request1.defaults({jar: true})
const fs = require('fs')

module.exports=function scrape(subdomain, keys) {
    console.log(keys)
    var url = "https://" + subdomain + ".viggo.dk";
    var postUrl = url + "/Basic/Account/Login";
    var getUrl = url + "/Basic/HomeworkAndAssignment";
    request.post({
        url: postUrl,
        form: keys
    }, function(err, res, body) {
        request({
            url: getUrl,
            jar: request.jar
        }, function(err, res, body) {
            fs.writeFile('result.html', body, function (err) {
                if (err) throw err;
                console.log('File saved!')
            })
        });

    });
    
}