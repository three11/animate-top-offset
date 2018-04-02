"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.animateTopOffset = void 0;
var win = window;
var easingEquations = {
  easeOutSine: function easeOutSine(pos) {
    return Math.sin(pos * (Math.PI / 2));
  },
  easeInOutSine: function easeInOutSine(pos) {
    return -0.5 * (Math.cos(Math.PI * pos) - 1);
  },
  easeInOutQuint: function easeInOutQuint(pos) {
    if ((pos /= 0.5) < 1) {
      return 0.5 * Math.pow(pos, 5);
    }

    return 0.5 * (Math.pow(pos - 2, 5) + 2);
  }
};

var requestAnimFrame = function () {
  return win.requestAnimationFrame || win.webkitRequestAnimationFrame || win.mozRequestAnimationFrame || function (callback) {
    win.setTimeout(callback, 1000 / 60);
  };
}();

var animateTopOffset = function animateTopOffset() {
  var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var container = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : win;
  var speed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2000;
  var easing = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'easeOutSine';
  var currentTime = 0;
  var scrollY = container.scrollY || document.documentElement.scrollTop;
  var time = Math.max(0.1, Math.min(Math.abs(scrollY - offset) / speed, 0.8));

  var tick = function tick() {
    currentTime += 1 / 60;
    var p = currentTime / time;
    var t = easingEquations[easing](p);
    var pos = p < 1 ? scrollY + (offset - scrollY) * t : offset;

    if (p < 1) {
      requestAnimFrame(tick);
    }

    container.scrollTo(0, pos);
  };

  tick();
};

exports.animateTopOffset = animateTopOffset;