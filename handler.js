"use strict"

let funker = require("./funker-node");
let sample = require("./sampleresponse.json");
var request = require("request");
let async = require('async');
let Parser = require('./parser');
let cheerio = require('cheerio');

async.whilst(() => {console.log("Request.."); return true; },
(cb) => {
  funker.handle((args, callback) => {
    console.log(args);
    
    let createList = (next) => {
        let parser = new Parser(cheerio);

        request.get("https://www.docker.com/community/docker-captains", (err, res, text) => {
            let captains = parser.parse(text);

            let valid = 0;
            let sorted = captains.sort((x,y) => {
            if(x.text > y.text) {
                return 1;
            }
            else if(x.text < y.text) {
                return -1;
            }
            return 0;
            });
            next(sorted);
        });
    };
    createList((sorted) => {
        let speechOutput = "There are currently " + sorted.length + " Docker captains.";
        sample.response.outputSpeech.text = speechOutput;
        sample.response.card.content = speechOutput;

        callback(sample);
        cb();
    })
  });
});

