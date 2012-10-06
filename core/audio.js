/*
* ESSENCE AUDIO
* ====================
* Author:   Matt Gale (info@littleball.co.uk)
* Version:  0.0.3
*
* This module deals with sound fx and music
*/

Essence.prototype.Audio = new function() {

  // object to load sounds into
  this.sounds = new Object();

  // check support
  this.checkSupport = function(handle) {
    // get type
    // check if this can be played
    // this.sounds[handle].canPlayType(type);
    // return true / false
  }

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
    var sound = this.sounds[handle];
    if(sound.paused) {
      sound.play();
    } else {
      sound.pause();
    }
  };

  // pauses and rewinds a sound
  this.stop = function(handle) {
    var sound = this.sounds[handle];
    sound.pause();
    if(sound.currentTime !== 0) {
      sound.currentTime = 0;
    }
  };

  // rewinds to the beginning
  this.rewind = function(handle) {
    var sound = this.sounds[handle];
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

  this.muteAll = function() {
    for(var sound in this.sounds) {
      this.sounds[sound].muted = true;
    }
  };

  this.unmuteAll = function(handle) {
    for(var sound in this.sounds) {
      this.sounds[sound].muted = false;
    }
  };

  //fade track out to volume
  this.fadeTo = function(handle, time, volume) {

    var v_diff,amount,steps,interval;

    this.setVolume = function(t,handle,steps,amount,interval) {
      if(steps > 0) {
        if(t.sounds[handle].volume + amount > 1) {
          t.sounds[handle].volume = 1;
        } else if(t.sounds[handle].volume + amount < 0) {
          t.sounds[handle].volume = 0;
        } else {
          t.sounds[handle].volume += amount;
        }
        setTimeout(function(){
          t.setVolume(t,handle,steps-1,amount,interval);
        },interval);
      }
    };
    
    v_diff = volume - this.sounds[handle].volume;
    steps = 20;
    amount = v_diff / steps;
    interval = time / steps;

    this.setVolume(this,handle,steps,amount,interval);
   
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
  
  this.delete = function(handle) {
    delete this.sounds[handle];
  };

};
