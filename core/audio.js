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
    var zero_volume = false;
    if(volume === 0) {
      volume = 0.01;
      zero_volume = true;
    }
    var volume_difference = this.sounds[handle].volume - volume,
      volume_per_step = volume_difference / time,
      step_size = 1,
      t = this;
    
    // work out how much to raise the volume by
    while(volume_per_step < 0.01) { 
      step_size *= 10;
      volume_per_step *= 10;
    }
    volume_per_step = volume_per_step.toFixed(2);

    this.changeVolume = function(volume) {

      // if volume is near correct level
      if(volume-volume_per_step < volume_per_step) {
        if(zero_volume) {
          t.sounds[handle].volume = 0;
        } else {
          t.sounds[handle].volume = t.sounds[handle].volume.toFixed(2);
        }
        return 1;
      } else  /* recursivly lower volume */ {
        t.sounds[handle].volume -= volume_per_step;
        volume -= volume_per_step;
        var cv = this;
        setTimeout(function(){cv.changeVolume(volume)},step_size);
      }

      // TODO work out how to fade up volume without affecting rest of function

    };

    this.changeVolume(volume_difference);
   
  };

  // TODO make this acutally work
  this.isPlaying = function(handle) {
    return !this.sounds[handle].paused;
  };
  
  // TODO make this work
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
