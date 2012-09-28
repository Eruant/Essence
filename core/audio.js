/*
* ESSENCE AUDIO
* ====================
* Author:   Matt Gale (info@littleball.co.uk)
* Version:  0.0.1
*
* This module deals with sound fx and music
*/

Essence.prototype.audio = new function() {

  // object to load sounds into
  this.sounds = new Object();

  // load a file into the sounds object
  this.load = function(filename,handle) {
    var sound = new Audio(filename);
    this.sounds[handle] = sound;
  };

  // set a sound playing
  this.play = function(handle) {
    this.sounds[handle].play();
  };

  // pause a sound
  this.pause = function(handle) {
    this.sounds[handle].pause();
  };

  // pauses and rewinds a sound
  this.stop = function(handle) {
    var sound = this.sounds[handle];
    sound.pause();
    if(sound.currentTime !== 0) {
      sound.currentTime = 0;
    }
  };

  // sets looping on
  this.setLooping = function(handle) {
    var sound = this.sounds[handle];
    if(typeof sound.loop == 'boolean') {
      sound.loop = true;
    } else {
      // TODO create an event listener to loop the sound
    }
  };

  // stops sound from looping
  this.stopLooping = function(handle) {
    var sound = this.sounds[handle];
    if(typeof sound.loop == 'boolean') {
      sound.loop = false;
    } else {
      // TODO remove any event listeners that loop the sound
    }
  };

  // sets the audio level
  this.setVolume = function(handle,volume) {
    this.sounds[handle].volume = volume;
  };

  // silence the audio without changing the volume
  this.mute = function(handle) {
    this.sounds[handle].muted = true;
  };

  // restores the audio to volume level
  this.unmute = function(handle) {
    this.sounds[handle].muted = false;
  };

  this.muteAll = function(handle) {
    for(var sound in this.sounds) {
      sound.muted = true;
    }
  };

  this.unmuteAll = function(handle) {
    for(var sound in this.sounds) {
      sound.muted = false;
    }
  };
  
  this.isPlaying = function(handle) {
    return !this.sounds[handle].paused;
  };
  
  this.isStopped = function(handle) {
    return this.sounds[handle].paused;
  };
  
  this.isLooping = function(handle) {
    var sound = this.sounds[handle];
    if(typeof sound.loop == 'boolean') {
      return sound.loop;
    } else {
      // TODO remove any event listeners that loop the sound
    }
  };
  
  // TODO need to check if this actually works
  this.delete = function(handle) {
    delete this.sounds[handle];
  };

};