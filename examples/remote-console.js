'use strict';

exports.remote = function(traces){
  // console.* calls relay to the local client
  const id = setInterval(function(){
    console.log({
      user: {
        name: {
          first: 'tobi',
          last: 'ferret'
        }
      }
    });
  }, 100);

  traces.on('cleanup', function(){
    clearInterval(id);
  });
};
