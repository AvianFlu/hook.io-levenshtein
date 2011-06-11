#! /usr/bin/env node
var Hook = require('hook.io').Hook,
    Levenshtein = require('levenshtein');

var levenshtein = new Hook( {
  name: 'levenshtein'
});

levenshtein.connect({
  port: 5000,
  host: "localhost"
});

levenshtein.on('ready', function(){
  levenshtein.on('in.getDistance', function(string1, string2){
    var lev = new Levenshtein(string1, string2);
    levenshtein.emit('out.getDistance', lev.distance);
  });
}); 
