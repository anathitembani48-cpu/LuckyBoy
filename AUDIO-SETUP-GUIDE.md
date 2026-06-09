# 🎵 Audio Setup Guide for KiddosLearn

Complete walkthrough for downloading your first nursery rhyme audio file and setting up your project structure.

---

## 📁 Step 1: Create Folder Structure

First, create these folders in your project's `public` directory:

```
your-project/
├── public/
│   └── audio/
│       ├── background/
│       ├── sfx/
│       └── nursery-rhymes/
```

### **How to Create Folders:**

**On Mac/Linux:**
```bash
mkdir -p public/audio/background
mkdir -p public/audio/sfx
mkdir -p public/audio/nursery-rhymes
```

**On Windows:**
1. Open File Explorer
2. Navigate to your project folder
3. Create new folder: `public` (if doesn't exist)
4. Inside `public`, create: `audio`
5. Inside `audio`, create three folders:
   - `background`
   - `sfx`
   - `nursery-rhymes`

---

## 🎤 Step 2: Download Your First Audio File

We'll start with **"Baa Baa Black Sheep"** because it's short and easy to sync!

### **Option A: Download from Pixabay (RECOMMENDED)**

**Why Pixabay?**
- ✅ Free, no copyright
- ✅ High quality
- ✅ No login required
- ✅ Direct downloads

**Steps:**

1. Go to: https://pixabay.com/music/search/baa%20baa%20black%20sheep/

2. Browse the results and find one you like
   - Listen to the preview first
   - Look for clear, kid-friendly versions
   - Avoid remixes for now

3. Click on the audio file you want

4. Click the **"Download"** button (usually blue button on the right)

5. Save it to: `public/audio/nursery-rhymes/`

6. **Rename the file** to: `baa.mp3`
   - Right-click the file → Rename
   - Change name to exactly: `baa.mp3`

---

### **Option B: Download from Internet Archive**

**Why Archive.org?**
- ✅ Complete collections
- ✅ High quality vintage recordings
- ✅ Educational focus

**Steps:**

1. Go to: https://archive.org/details/thebestnurseryrhymes1

2. Look for "Baa Baa Black Sheep" in the track list

3. Click the audio file

4. Click the **download icon** (down arrow) on the right

5. Choose **MP3** format

6. Save to: `public/audio/nursery-rhymes/`

7. Rename to: `baa.mp3`

---

### **Option C: Download from Freesound**

**Why Freesound?**
- ✅ Community uploaded
- ✅ Variety of versions
- ✅ User ratings and reviews

**Steps:**

1. Go to: https://freesound.org/

2. Search for: "baa baa black sheep"

3. Filter by:
   - License: "Creative Commons"
   - Duration: < 1 minute (short versions)

4. Click on a file you like

5. Click **"Download"** button

6. May need free account (takes 1 minute to create)

7. Save to: `public/audio/nursery-rhymes/`

8. Rename to: `baa.mp3`

---

## 🔊 Step 3: Add Sound Effects (Optional but Recommended)

Get these three short sound effects:

### **Click Sound**
- Search: "button click sound" or "beep sound"
- Find a short (< 1 sec) crisp sound effect
- Download from Pixabay, Freesound, or Zapsplat
- Save as: `public/audio/sfx/click.mp3`

### **Success Sound**
- Search: "success chime" or "positive ding"
- Something cheerful and uplifting
- Save as: `public/audio/sfx/success.mp3`

### **Error Sound**
- Search: "error buzzer" or "wrong answer sound"
- Something that indicates a mistake
- Save as: `public/audio/sfx/error.mp3`

**Quick Links:**
- Pixabay Sound Effects: https://pixabay.com/sound-effects/
- Freesound Effects: https://freesound.org/
- Zapsplat: https://www.zapsplat.com/

---

## 🎶 Step 4: Download Background Music (Optional)

For background music, search for:
- "Relaxing kids background music"
- "Soft piano lullaby"
- "Calm children's music"

Keep it:
- ✅ Soft and not distracting
- ✅ 1-5 minutes long
- ✅ Kid-friendly

Save as: `public/audio/background/background-music.mp3`

---

## ✅ Step 5: Verify Your Folder Structure

After downloading, your structure should look like:

```
your-project/
├── public/
│   └── audio/
│       ├── background/
│       │   └── background-music.mp3 ← (optional)
│       ├── sfx/
│       │   ├── click.mp3
│       │   ├── success.mp3
│       │   └── error.mp3
│       └── nursery-rhymes/
│           └── baa.mp3 ← YOU'LL CREATE THIS FIRST
├── audio-manager.js
├── audio-controls.html
├── nursery-rhymes-data.js
├── timing-calibrator.html
└── timing-calibrator-guide.html
```

---

## 🎯 Step 6: Test Your Audio File

Before syncing with lyrics:

1. Open any HTML file in your browser that uses audio
2. Manually check if audio plays
3. Make sure there are no console errors

**Check this by:**
- Opening browser Developer Tools (F12)
- Look at the "Console" tab
- No red errors should appear

---

## ⏱️ Step 7: Sync Your First Rhyme

Now that you have your first audio file (`baa.mp3`):

1. Open `timing-calibrator.html` in your browser

2. Upload `public/audio/nursery-rhymes/baa.mp3`

3. Enter name: `Baa Baa Black Sheep`

4. Play the audio and capture timings:
   - "Baa, baa, black sheep"
   - "Have you any wool?"
   - "Yes sir, yes sir"
   - "Three bags full"
   - etc.

5. Copy the generated code

6. Paste into `nursery-rhymes-data.js`:

```javascript
const nurseryRhymes = {
  baa: {
    name: 'Baa Baa Black Sheep',
    audioUrl: '/audio/nursery-rhymes/baa.mp3',
    lyrics: [
      { time: 0.5, text: 'Baa, baa, black sheep' },
      { time: 2.0, text: 'Have you any wool?' },
      { time: 3.5, text: 'Yes sir, yes sir' },
      { time: 5.0, text: 'Three bags full' }
      // ... add more as you capture them
    ]
  }
  // ... other rhymes
};
```

---

## 🧪 Step 8: Test in Your App

1. Open `audio-controls.html` in browser

2. You should see a button: "Baa Baa Black Sheep"

3. Click it

4. ✅ Audio plays + lyrics appear at bottom

---

## 🐛 Troubleshooting

### **Audio doesn't play:**
- Check file format is `.mp3`
- Check path is correct: `/audio/nursery-rhymes/baa.mp3`
- Check file exists in the right folder
- Check browser console (F12) for errors

### **Lyrics don't appear:**
- Check you pasted code correctly in `nursery-rhymes-data.js`
- Check there are no typos in the timing object
- Make sure commas are in right places
- Check timing values are numbers (not strings)

### **Lyrics don't sync with audio:**
- Re-run the timing calibrator
- Be more precise when clicking "Capture Timing"
- Try pausing audio between lyrics to be more accurate

### **File won't upload to calibrator:**
- Make sure it's MP3 format
- Try a different file
- Clear browser cache (Ctrl+Shift+Delete)

---

## 📊 Recommended Download Order

Start with these in order:

1. **Baa Baa Black Sheep** ← START HERE (20-30 sec)
2. **Twinkle Twinkle Little Star** (30-40 sec)
3. **Mary Had a Lamb** (40-50 sec)
4. Sound Effects (click, success, error)
5. Background Music (optional)

Each one gets progressively longer, so you get comfortable with the process!

---

## 🎵 Download Checklist

Use this to track your progress:

- [ ] Created `public/audio/` folder structure
- [ ] Downloaded "Baa Baa Black Sheep" audio
- [ ] Saved to `public/audio/nursery-rhymes/baa.mp3`
- [ ] Opened `timing-calibrator.html`
- [ ] Uploaded the audio file
- [ ] Captured all lyric timings
- [ ] Copied the generated code
- [ ] Pasted into `nursery-rhymes-data.js`
- [ ] Opened `audio-controls.html`
- [ ] Clicked "Baa Baa Black Sheep" button
- [ ] ✅ Audio plays with synced lyrics!

---

## 🆘 Need Help?

If you get stuck:

1. **Check the timing-calibrator-guide.html** - Has detailed explanations
2. **Review the Live Example tab** - Shows exactly how it works
3. **Check your console (F12)** - Look for red errors
4. **Verify folder structure** - Path must match exactly

---

## 🚀 Next Steps After First Rhyme

Once "Baa Baa Black Sheep" works:

1. Download "Twinkle Twinkle Little Star"
2. Repeat the sync process
3. Add it to `nursery-rhymes-data.js`
4. Add the button to `audio-controls.html`
5. Test it! 🎉

You're building something amazing! 🌟

