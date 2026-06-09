/**
 * Audio Manager for KiddosLearn
 * Handles all audio playback: background music, sound effects, and nursery rhymes
 * Updated to work with TanStack Start and modern project structure
 */

class AudioManager {
  constructor() {
    this.backgroundAudio = new Audio();
    this.rhymeAudio = new Audio();
    this.backgroundVolume = 0.3;
    this.sfxVolume = 0.7;
    this.rhymeVolume = 1;
    this.isMutedBg = false;
    this.isMutedSfx = false;
    
    // Initialize audio elements
    this.backgroundAudio.loop = true;
    this.rhymeAudio.loop = false;
  }
  
  // ===== BACKGROUND MUSIC CONTROLS =====
  
  playBackground(audioPath = '/audio/background/background-music.mp3') {
    this.backgroundAudio.src = audioPath;
    this.backgroundAudio.volume = this.isMutedBg ? 0 : this.backgroundVolume;
    this.backgroundAudio.play().catch(err => {
      console.warn('Background audio autoplay failed:', err);
    });
  }
  
  pauseBackground() {
    this.backgroundAudio.pause();
  }
  
  stopBackground() {
    this.backgroundAudio.pause();
    this.backgroundAudio.currentTime = 0;
  }
  
  setBackgroundVolume(volume) {
    this.backgroundVolume = Math.max(0, Math.min(1, volume / 100));
    if (!this.isMutedBg) {
      this.backgroundAudio.volume = this.backgroundVolume;
    }
  }
  
  toggleBackgroundMute() {
    this.isMutedBg = !this.isMutedBg;
    this.backgroundAudio.volume = this.isMutedBg ? 0 : this.backgroundVolume;
    return this.isMutedBg;
  }
  
  // ===== SOUND EFFECTS CONTROLS =====
  
  playSFX(effectType = 'click') {
    const sfxPaths = {
      click: '/audio/sfx/click.mp3',
      success: '/audio/sfx/success.mp3',
      error: '/audio/sfx/error.mp3'
    };
    
    const sfxAudio = new Audio();
    sfxAudio.src = sfxPaths[effectType] || sfxPaths.click;
    sfxAudio.volume = this.isMutedSfx ? 0 : this.sfxVolume;
    sfxAudio.play().catch(err => {
      console.warn(`SFX ${effectType} failed:`, err);
    });
  }
  
  setSfxVolume(volume) {
    this.sfxVolume = Math.max(0, Math.min(1, volume / 100));
  }
  
  toggleSfxMute() {
    this.isMutedSfx = !this.isMutedSfx;
    return this.isMutedSfx;
  }
  
  // ===== NURSERY RHYME CONTROLS =====
  
  playNurseryRhyme(rhyme) {
    if (!rhyme || !rhyme.audioUrl) {
      console.error('Invalid rhyme object:', rhyme);
      return;
    }
    
    this.rhymeAudio.src = rhyme.audioUrl;
    this.rhymeAudio.volume = this.rhymeVolume;
    this.rhymeAudio.play().catch(err => {
      console.warn('Nursery rhyme playback failed:', err);
    });
    
    // Set up lyrics display if lyrics exist
    if (rhyme.lyrics && rhyme.lyrics.length > 0) {
      this.displayLyricsWithTiming(rhyme.lyrics);
    }
    
    // Play success sound
    this.playSFX('success');
  }
  
  pauseNurseryRhyme() {
    this.rhymeAudio.pause();
  }
  
  stopNurseryRhyme() {
    this.rhymeAudio.pause();
    this.rhymeAudio.currentTime = 0;
  }
  
  setRhymeVolume(volume) {
    this.rhymeVolume = Math.max(0, Math.min(1, volume / 100));
    this.rhymeAudio.volume = this.rhymeVolume;
  }
  
  // ===== LYRICS DISPLAY WITH TIMING =====
  
  displayLyricsWithTiming(lyrics) {
    const lyricsDisplay = document.getElementById('lyrics-display');
    if (!lyricsDisplay) {
      console.warn('Lyrics display element not found');
      return;
    }
    
    lyrics.forEach((lyric, index) => {
      setTimeout(() => {
        if (this.rhymeAudio.paused) return;
        
        lyricsDisplay.textContent = lyric.text;
        lyricsDisplay.style.opacity = '1';
        
        // Fade out effect
        const nextLyric = lyrics[index + 1];
        const displayDuration = nextLyric ? nextLyric.time - lyric.time : 2;
        
        setTimeout(() => {
          if (!this.rhymeAudio.paused) {
            lyricsDisplay.style.opacity = '0';
          }
        }, (displayDuration * 1000) - 300);
        
      }, lyric.time * 1000);
    });
  }
  
  // ===== UTILITY METHODS =====
  
  getBackgroundIsPlaying() {
    return !this.backgroundAudio.paused;
  }
  
  getRhymeIsPlaying() {
    return !this.rhymeAudio.paused;
  }
  
  getCurrentRhymeTime() {
    return this.rhymeAudio.currentTime;
  }
  
  setRhymeTime(seconds) {
    this.rhymeAudio.currentTime = seconds;
  }
}

// Create global instance
const audioManager = new AudioManager();

// Export for use in modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = audioManager;
}
