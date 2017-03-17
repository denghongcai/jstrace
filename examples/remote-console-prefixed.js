'use strict';

exports.remote = function(traces){
  // console.* calls relay to the local client
  const id = setInterval(function(){
    console.dir({
      user: {
        name: {
          first: 'tobi',
          last: 'ferret'
        }
      }
    });
  }, 250);

  traces.on('cleanup', function(){
    clearInterval(id);
  });
};
