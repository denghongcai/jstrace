'use strict';

/**
 * This file illustrates how remote execution
 * can be used to reduce information and render
 * on the client, even across multiple processes
 * or a cluster.
 */

// $ node examples/big
// $ jstrace examples/big-lengths
// $ jstrace examples/big-lengths-local

/**
 * Module dependencies.
 */

const trace = require('..');

// things you can filter by:

console.log('pid: %d', process.pid);
process.title = 'big';

// thing that generates some
// useless strings, but shows
// how big-view can report
// on the lengths without
// transmitting the data

setInterval(function(){
  const kb = Math.random() * 500 | 0;
  const str = new Array(kb * 1024).join('-');
  trace('alloc', { value: str });
}, 150);