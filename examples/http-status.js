'use strict';

/**
 * This example shows how you can plot the distribution
 * of http response statuses over time.
 */

const clear = require('clear');
const bars = require('bars');

const m = {};

exports.local = function(traces){
  traces.on('request:end', function(trace){
    m[trace.status] = m[trace.status] || 0;
    m[trace.status]++;
  });
};

setInterval(function(){
  clear();
  console.log();
  console.log(bars(m, { bar: '=', width: 30 }));
  // m = {}; // optionally clear the bins each tick
}, 1000);
