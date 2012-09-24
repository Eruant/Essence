/*
* INPUT
* ====================
* Author:   Matt Gale (info@littleball.co.uk)
* Version:  0.0.1
*
* This module deals with getting user input from the device
*/

function Input() {
  this.isKeyPressed(keyCode) {
  }

  function isTouchDown(pointer) {
  }

  function getTouchX(pointer) {
  }

  function getTouchY(pointer) {
  }

  function getAccelX() {
  }

  function getAccelY() {
  }

  function getAccelZ() {
  }

  function getKeyEvents() {
  }

  function getTouchEvents() {
  }
}

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
 // to be worked out
}
