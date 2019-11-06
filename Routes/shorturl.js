var express = require('express');
var Router = express.Router();
const bodyParser = require('body-parser');
const dns = require('dns');

var urls = [];

Router.use(bodyParser.urlencoded({extended: false}));
Router.post('/new', function(req, res, next){
  console.log("Before request: " + urls);
  let myRegex = /^https:\/\//;
  if(myRegex.test(req.body.url)) {
       // Strip the 'https://'
       req.body.url = req.body.url.slice(8);
   }
  dns.lookup(String(req.body.url), (err) => { 
    
    if(err == null) {
      
      let urlIndex = urls.indexOf(req.body.url);
        
        if(urlIndex != -1){
          res.json({"original url":req.body.url, "short_url":urlIndex});
        } else {
          res.json({"original url":req.body.url, "short_url":urls.length});
          urls.push(req.body.url);
        }
    } else {
        res.json({"error": "invalid URL"});
      }
  });
});


Router.get('/:urlNumber', function(req, res, next){ 
  res.redirect(urls[req.params.urlNumber]);
});



module.exports = Router;