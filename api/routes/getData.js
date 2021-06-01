const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

router.get('/',function(req,res,next){
let url = "https://dk-frontend-test.s3-eu-west-1.amazonaws.com/index.json";

let settings = { method: "Get" };

fetch(url, settings)
    .then(res => res.json())
    .then((json) => {
      res.send(json);
    });
});

module.exports = router;