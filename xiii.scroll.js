(function(window) {

  "use strict";

  var document = window.document,

    scroll = (function() {

      var requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || window.setTimeout,
        startValue = 0,
        targetValue = 0,
        currentDuration = 0,
        lastTime = 0,
        interval = 1000 / 60,
        running = false,
        firstStep = true;

      return function(target, targetDuration) {

        if ( running ) { return; }

        typeof target === "string" && ( target = document.getElementById(target) );
        typeof targetDuration !== "number" && ( targetDuration = 1 );

        targetValue = target instanceof Element ? target.offsetTop : typeof target === "number" ? target : 0;
        startValue = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
        currentDuration = 0;
        running = true;
        firstStep = true;

        requestAnimationFrame(update, interval);

        function update(currentTime) {

          currentTime || ( currentTime = Date.now() );

          if ( firstStep ) {

            firstStep = false;

            lastTime = currentTime;

            requestAnimationFrame(update, interval);

          } else {

            currentDuration += ( currentTime - lastTime ) / 1000;

            if ( targetDuration <= currentDuration ) {

              document.documentElement.scrollTop = document.body.scrollTop = targetValue;

              running = false;

            } else {

              var durationRatio = currentDuration / targetDuration - 1;

              document.documentElement.scrollTop = document.body.scrollTop = ( targetValue - startValue ) * ( durationRatio * durationRatio * durationRatio + 1 ) + startValue;

              lastTime = currentTime;

              requestAnimationFrame(update, interval);

            }

          }

        }

      }

    })();

  window.XIII || ( window.XIII = {} );

  window.XIII.scroll = scroll;

})(window);