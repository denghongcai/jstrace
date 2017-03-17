'use strict';

/**
 * Module dependencies.
 */

const http = require('http');
const trace = require('..');

// things you can filter by:

console.log('pid: %d', process.pid);
process.title = 'http';

// request id

let ids = 0;

// randomized status

const status = [
  200,
  201,
  400,
  404,
  500,
  505
];

// server

const server = http.createServer(function(req, res){
  const id = ++ids;

  trace('request:start', { id });
  setTimeout(function(){

    res.statusCode = status[Math.random() * status.length | 0];
    res.end('hello world');
    trace('request:end', { id, status: res.statusCode });
  }, Math.random() * 250 | 0);
});

server.listen(3000);

// another just for trace noise

setInterval(function(){
  trace('something');
}, 200);