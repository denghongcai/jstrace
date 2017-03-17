'use strict';

/**
 * This example shows how you can perform more
 * complex reporting, in this case charting requests-per-second
 * using jstrace/chart.
 */

const chart = require('chart');
const clear = require('clear');
const data = [];
let n = 0;

exports.local = function(traces){
  traces.on('request:end', function(){
    n++
  });
};

setInterval(function(){
  data.push(n);
  n = 0;
  clear();
  console.log(chart(data));
}, 1000);
