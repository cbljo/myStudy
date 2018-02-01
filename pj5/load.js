var http = require("http");

// Utility function that downloads a URL and invokes
// callback with the data.
function download(url, callback) {
    http.get(url, function(res) {
        var data = "";
        res.on('data', function (chunk) {
            data += chunk;
        });
        res.on("end", function() {
            callback(data);
        });
    }).on("error", function() {
        callback(null);
    });
}

var cheerio = require("cheerio");
var fs =require('fs');

var url = "http://api.avatardata.cn/Weather/Query?key=b101a32b11d74382b8ab1dab6451f270&cityname=北京";
download(url, function(data) {
    if (data) {
        console.log(data);

        console.log("done");
    }
    else console.log("error");
});