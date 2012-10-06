/*
* INPUT
* ====================
* Author:   Matt Gale (info@littleball.co.uk)
* Version:  0.0.1
*
* This module deals with getting user input from the device
*/

Essence.prototype.Input = new function() {

  this.isKeyPressed = function(e,keyCode) {
    var e = e || window.event;
    if(e.keyCode && e.keyCode == keyCode) {
      return true;
    } else {
      return false;
    }
  }

  this.isTouchDown = function(pointer) {
  }

  this.getTouchX = function(pointer) {
  }

  this.getTouchY = function(pointer) {
  }

  this.getAccelX = function() {
  }

  this.getAccelY = function() {
  }

  this.getAccelZ = function() {
  }

  this.getKeyEvents = function() {
  }

  this.getTouchEvents = function() {
  }
}

 // not sure if this is the best way to add the key events

/*
Input.prototype.keyEvent = function() {
  this.KEY_UP = 1;
  this.KEY_DOWN = 0;

  this.type;
  this.keyCode;
  this.keyChar;
}

Input.prototype.touchEvent = function() {
  this.TOUCH_DOWN = 0;
  this.TOUCH_UP = 1;
  this.TOUCH_DRAGGED = 2;

  this.type;
  this.x;
  this.y;
  this.pointer;
}

Input.prototype.gamepadEvent = function() {
  
  this.connectGamepad = function(e) {
    this.gamepadId = e.gamepad.id;
  }

  window.addEventListener("MozGamepadConnected", gamepadConnected, false);
}
*/
