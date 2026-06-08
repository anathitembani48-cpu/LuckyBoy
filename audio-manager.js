/**
 * Audio Manager for KiddosLearn
 * Manages background music, sound effects, and nursery rhyme audio with separate volume controls
 */

class AudioManager {
  constructor() {
    // Create audio context
    this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    
    // Background Music
    this.bgMusicElement = document.getElementById('bgMusic') || this.createAudioElement('bgMusic');
    this.bgMusicVolume = 0.3; // Default 30%
    this.bgMusicMuted = false;
    
    // Sound Effects
    this.sfxElements = {};
    this.sfxVolume = 0.7; // Default 70%
    this.sfxMuted = false;
    
    // Nursery Rhymes
    this.currentRhyme = null;
    this.currentLyrics = [];
    this.lyricsDisplay = document.getElementById('lyricsDisplay') || this.createLyricsDisplay();
    this.currentLyricIndex = 0;
    this.lyricTimeouts = [];
    
    // Initialize
    this.initializeAudio();
  }
  
  createAudioElement(id) {
    const audio = document.createElement('audio');
    audio.id = id;
    audio.setAttribute('preload', 'auto');
    document.body.appendChild(audio);
    return audio;
  }
  
  createLyricsDisplay() {
    const display = document.createElement('div');
    display.id = 'lyricsDisplay';
    display.style.cssText = `
      position: fixed;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(0, 0, 0, 0.8);
      color: #fff;
      padding: 15px 30px;
      border-radius: 10px;
      font-size: 18px;
      font-weight: bold;
      text-align: center;
      z-index: 1000;
      min-width: 300px;
      display: none;
      max-width: 80vw;
      animation: slideUp 0.3s ease-out;
    `;
    document.body.appendChild(display);
    return display;
  }
  
  initializeAudio() {
    // Resume audio context on user interaction
    document.addEventListener('click', () => {
      if (this.audioContext.state === 'suspended') {
        this.audioContext.resume();
      }
    });
    
    // Update background music volume
    this.bgMusicElement.volume = this.bgMusicMuted ? 0 : this.bgMusicVolume;
  }
  
  // ==================== BACKGROUND MUSIC ====================
  
  playBackgroundMusic(url, loop = true) {
    this.bgMusicElement.src = url;
    this.bgMusicElement.loop = loop;
    this.bgMusicElement.play().catch(e => console.log('Autoplay prevented:', e));
  }
  
  pauseBackgroundMusic() {
    this.bgMusicElement.pause();
  }
  
  stopBackgroundMusic() {
    this.bgMusicElement.pause();
    this.bgMusicElement.currentTime = 0;
  }
  
  setBackgroundMusicVolume(volume) {
    this.bgMusicVolume = Math.max(0, Math.min(1, volume)); // Clamp between 0-1
    this.bgMusicElement.volume = this.bgMusicMuted ? 0 : this.bgMusicVolume;
  }
  
  toggleBackgroundMusicMute() {
    this.bgMusicMuted = !this.bgMusicMuted;
    this.bgMusicElement.volume = this.bgMusicMuted ? 0 : this.bgMusicVolume;
    return this.bgMusicMuted;
  }
  
  // ==================== SOUND EFFECTS ====================
  
  createSFX(id, url) {
    const sfx = document.createElement('audio');
    sfx.id = `sfx-${id}`;
    sfx.src = url;
    sfx.preload = 'auto';
    document.body.appendChild(sfx);
    this.sfxElements[id] = sfx;
    return sfx;
  }
  
  playSFX(id) {
    if (!this.sfxElements[id]) {
      console.warn(`SFX "${id}" not found`);
      return;
    }
    
    const sfx = this.sfxElements[id];
    sfx.currentTime = 0;
    sfx.volume = this.sfxMuted ? 0 : this.sfxVolume;
    sfx.play().catch(e => console.log('SFX autoplay prevented:', e));
  }
  
  setSFXVolume(volume) {
    this.sfxVolume = Math.max(0, Math.min(1, volume)); // Clamp between 0-1
    // Update all active sound effects
    Object.values(this.sfxElements).forEach(sfx => {
      sfx.volume = this.sfxMuted ? 0 : this.sfxVolume;
    });
  }
  
  toggleSFXMute() {
    this.sfxMuted = !this.sfxMuted;
    Object.values(this.sfxElements).forEach(sfx => {
      sfx.volume = this.sfxMuted ? 0 : this.sfxVolume;
    });
    return this.sfxMuted;
  }
  
  // ==================== NURSERY RHYMES WITH LYRICS ====================
  
  playNurseryRhyme(rhymeData) {
    // Stop current rhyme if playing
    if (this.currentRhyme) {
      this.stopNurseryRhyme();
    }
    
    this.currentRhyme = rhymeData;
    this.currentLyrics = rhymeData.lyrics || [];
    this.currentLyricIndex = 0;
    
    // Create/update audio element for rhyme
    let rhymeAudio = document.getElementById('rhymeAudio');
    if (!rhymeAudio) {
      rhymeAudio = document.createElement('audio');
      rhymeAudio.id = 'rhymeAudio';
      document.body.appendChild(rhymeAudio);
    }
    
    rhymeAudio.src = rhymeData.audioUrl;
    rhymeAudio.onended = () => this.onRhymeEnded();
    rhymeAudio.play().catch(e => console.log('Rhyme autoplay prevented:', e));
    
    // Schedule lyrics display
    this.scheduleLyrics();
  }
  
  scheduleLyrics() {
    // Clear previous timeouts
    this.lyricTimeouts.forEach(timeout => clearTimeout(timeout));
    this.lyricTimeouts = [];
    
    // Schedule each lyric
    this.currentLyrics.forEach((lyric, index) => {
      const timeout = setTimeout(() => {
        this.displayLyric(lyric, index);
      }, lyric.time * 1000);
      
      this.lyricTimeouts.push(timeout);
    });
  }
  
  displayLyric(lyric, index) {
    this.currentLyricIndex = index;
    this.lyricsDisplay.textContent = lyric.text;
    this.lyricsDisplay.style.display = 'block';
    
    // Add animation class
    this.lyricsDisplay.style.animation = 'none';
    setTimeout(() => {
      this.lyricsDisplay.style.animation = 'slideUp 0.3s ease-out';
    }, 10);
  }
  
  stopNurseryRhyme() {
    const rhymeAudio = document.getElementById('rhymeAudio');
    if (rhymeAudio) {
      rhymeAudio.pause();
      rhymeAudio.currentTime = 0;
    }
    
    // Clear all scheduled lyrics
    this.lyricTimeouts.forEach(timeout => clearTimeout(timeout));
    this.lyricTimeouts = [];
    
    // Hide lyrics display
    this.lyricsDisplay.style.display = 'none';
    this.currentRhyme = null;
  }
  
  onRhymeEnded() {
    this.lyricsDisplay.style.display = 'none';
  }
  
  // ==================== UTILITY ====================
  
  getBackgroundMusicVolume() {
    return this.bgMusicVolume;
  }
  
  getSFXVolume() {
    return this.sfxVolume;
  }
  
  isBackgroundMusicMuted() {
    return this.bgMusicMuted;
  }
  
  isSFXMuted() {
    return this.sfxMuted;
  }
}

// Initialize global audio manager
const audioManager = new AudioManager();
