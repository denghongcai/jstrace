'use strict';

/**
 * This example shows how you can map on the .pid to
 * report on multiple processes, or an entire cluster
 * in real-time.
 */

const m = {};

exports.local = function(traces){
  traces.on('request:start', function(trace){
    const p = m[trace.pid] = m[trace.pid] || {};
    p[trace.id] = p[trace.id] || {};
    p[trace.id] = trace.timestamp;
  });

  traces.on('request:end', function(trace){
    const start = m[trace.pid][trace.id];
    const d = Date.now() - start;
    console.log('[%s] %s -> %sms', trace.pid, trace.id, d);
  });
};
