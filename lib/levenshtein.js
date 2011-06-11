#! /usr/bin/env node
var Hook = require('hook.io').Hook,
    Levenshtein = require('levenshtein');

var insult = new Hook( {
  name: 'levenshtein'
});

insult.connect({
  port: 5000,
  host: "localhost"
});

insult.on('ready', function(){
  insult.on('in.getDistance', function(string1, string2){
    var lev = new Levenshtein(string1, string2);
    insult.emit('out.getDistance', lev.distance);
  });
}); 
