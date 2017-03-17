'use strict';

/**
 * This example illustrates the same end-result as
 * http-durations-patterns, however using separate
 * event handlers.
 */

const m = {};

exports.local = function(traces){
  traces.on('request:start', function(trace){
    m[trace.id] = trace.timestamp;
  });

  traces.on('request:end', function(trace){
    const d = Date.now() - m[trace.id];
    console.log('%s -> %sms', trace.id, d);
  });
};
