var express = require('express');
var Router = express.Router();
const bodyParser = require('body-parser');
const dns = require('dns');

var urls = [];

Router.use(bodyParser.urlencoded({extended: false}));
Router.post('/', function(req, res, next){
  console.log("Before request: " + urls);
  // dns.lookup(String(req.body.url), (err) => { 
  //   console.log(err);
  //   if(err.code == "ENOTFOUND") {
  //     console.log("Error thrown");
  //     res.json({"error": "invalid URL"});
  //     } else {
  //       let urlIndex = urls.indexOf(req.body.url);
  //       if(urlIndex != -1){
  //         res.json({"original url":req.body.url, "short_url":urlIndex});
  //       } else {
  //         res.json({"original url":req.body.url, "short_url":urls.length});
  //         urls.push(req.body.url);
  //     }
  //   }
  // });
  
  dns.lookup(req.body.url, (err, addresses, family) => {
    console.log(err);
   });

   
   testURL = 'https://www.google.com';
   myRegex = /^https:\/\//;

   // Look for the https at the start of the string
   if(myRegex.test(testURL)) {
       // Strip the 'https://'
       testURL = testURL.slice(8);
   }

});



module.exports = Router;