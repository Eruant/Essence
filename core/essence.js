/*
* ESSENCE
* ====================
* Author:   Matt Gale (matt@littleball.co.uk)
* Version:  0.0.4
*
* Essence is a framework for developing javascript games
*/

window.requestAnimationFrame = (function() {
  return  window.requestAnimationFrame
    || window.webkitRequestAnimationFrame
    || window.mozRequestAnimationFrame
    || window.oRequestAnimationFrame
    || window.msRequestAnimationFrame
    || function(/* function */ callback, /* DOMElement */ element){
      window.setTimeout(callback, 1000 / 60);
    }
  ;
})();

(function(){

  var canvas = document.createElement('canvas')
    , ctx = canvas.getContext('2d')
  ;

  // check canvas support
  if(!ctx){
    window.alert('Opps! It appears that your browser does not support canvas. You won\'t be able to use this feature.');
  }

  // set up global function
  window.essence = {};

  // state
  window.essence.state = {
      running: false
    , startGame: function() {
        window.essence.state.running = true;
        window.essence.system.update.requestAnimFrame();
      }
    , pauseGame: function() {
        window.essence.state.running = false;
      }
  };

  // deal with system variables (canvas, timing and updates)
  window.essence.system = {
      canvas: canvas
    , ctx: ctx
    , height: (function(){
        return (typeof(window.innerHeight) == 'number') ? window.innerHeight : document.documentElement.clientHeight;
      })()
    , width: (function(){
        return (typeof(window.innerWidth) == 'number') ? window.innerWidth : document.documentElement.clientWidth;
      })()
    , startTime: new Date().getTime()
    , update: {
          methods: []
        , requestAnimFrame: function() {
            var currentTime = new Date().getTime()
              , timePassed = currentTime - window.essence.system.startTime
              , s = window.essence.system
              , i
            ;

            s.canvas.width = s.width;

            // call every function in the draw method
            for(i=0; i<window.essence.system.update.methods.length; i++) {
              window.essence.system.update.methods[i](timePassed);
            }
            
            if(window.essence.state.running) {
              window.requestAnimationFrame(window.essence.system.update.requestAnimFrame);
            }
          }
        // end requestAnimFrame
      }
    , init: function() {
      // start everything
      var g = window.essence
        , s = g.system
        , c = s.canvas
      ;
      c.width = s.width;
      c.height = s.height;
      document.getElementsByTagName('body')[0].appendChild(c);
      g.state.startGame();
    }
  };

  // set up the environment features (wind gravity)
  window.essence.environment = {
      gravity: 0.08
    , wind: 0.03
  };

})();
