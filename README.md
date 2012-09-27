# Essence #
A javascript engin for creating canvas based environments


## Modules ##

### Audio ###

**essence.audio.sounds**

This is an object that stores your audio files

**essence.audio.load(filename,handle)**

This stores an audio file into the 'sounds' object, which you can refer to later by
the sound handle sent in

**essence.audio.play(handle)**

Sets an 'Audio' element from the 'sounds' object playing

**essence.audio.pause(handle)**

Pauses an 'Audio' element from the 'sounds' object playing

**essence.audio.stop(handle)**

Stop and rewinds an 'Audio' element from the 'sounds' object playing

**essence.audio.setLooping(handle)**

Sets the audio file to loop at the end of the track

**essence.audio.stopLooping(handle)**

Sets the audio file to stop a track looping

**essence.audio.setVolume(handle,volume)**

Sets the volume of the sound (0.0 = silent, 1.0 = max)

**essence.audio.mute(handle)**

Sets a sound to be silent

**essence.audio.unmute(handle)**

Sets a sound back to it's original sound level

**essence.audio.muteAll(handle)**

Sets all sounds to be silent

**essence.audio.unmuteAll(handle)**

Sets all sounds back to their original sound level

