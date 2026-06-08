/**
 * Nursery Rhymes Database
 * Contains audio URLs and synchronized lyrics for each nursery rhyme
 */

const nurseryRhymes = {
  twinkle: {
    name: 'Twinkle Twinkle Little Star',
    audioUrl: '/audio/nursery-rhymes/twinkle-twinkle.mp3',
    lyrics: [
      { time: 0, text: 'Twinkle, twinkle, little star' },
      { time: 2.5, text: 'How I wonder what you are' },
      { time: 5, text: 'Up above the world so high' },
      { time: 7.5, text: 'Like a diamond in the sky' },
      { time: 10, text: 'Twinkle, twinkle, little star' },
      { time: 12.5, text: 'How I wonder what you are' }
    ]
  },
  
  mary: {
    name: 'Mary Had a Little Lamb',
    audioUrl: '/audio/nursery-rhymes/mary-lamb.mp3',
    lyrics: [
      { time: 0, text: 'Mary had a little lamb' },
      { time: 2, text: 'Little lamb, little lamb' },
      { time: 3.5, text: 'Mary had a little lamb' },
      { time: 5.5, text: 'Its fleece was white as snow' },
      { time: 7.5, text: 'And everywhere that Mary went' },
      { time: 9.5, text: 'The lamb was sure to go' },
      { time: 11.5, text: 'It followed her to school one day' },
      { time: 13.5, text: 'Which was against the rule' },
      { time: 15.5, text: 'It made the children laugh and play' },
      { time: 17.5, text: 'To see a lamb at school' }
    ]
  },
  
  baa: {
    name: 'Baa Baa Black Sheep',
    audioUrl: '/audio/nursery-rhymes/baa-black-sheep.mp3',
    lyrics: [
      { time: 0, text: 'Baa, baa, black sheep' },
      { time: 2, text: 'Have you any wool?' },
      { time: 3.5, text: 'Yes sir, yes sir' },
      { time: 5, text: 'Three bags full' },
      { time: 6.5, text: 'One for my master' },
      { time: 8, text: 'One for my dame' },
      { time: 9.5, text: 'And one for the little boy' },
      { time: 11, text: 'Who lives down the lane' }
    ]
  },
  
  oldmacdonald: {
    name: 'Old MacDonald Had a Farm',
    audioUrl: '/audio/nursery-rhymes/old-macdonald.mp3',
    lyrics: [
      { time: 0, text: 'Old MacDonald had a farm' },
      { time: 2, text: 'E-I-E-I-O' },
      { time: 3.5, text: 'And on that farm he had a cow' },
      { time: 5.5, text: 'E-I-E-I-O' },
      { time: 7, text: 'With a moo-moo here' },
      { time: 8, text: 'And a moo-moo there' },
      { time: 9, text: 'Here a moo, there a moo' },
      { time: 10, text: 'Everywhere a moo-moo' },
      { time: 11.5, text: 'Old MacDonald had a farm' },
      { time: 13.5, text: 'E-I-E-I-O' }
    ]
  },
  
  hickory: {
    name: 'Hickory Dickory Dock',
    audioUrl: '/audio/nursery-rhymes/hickory-dickory.mp3',
    lyrics: [
      { time: 0, text: 'Hickory, dickory, dock' },
      { time: 2, text: 'The mouse ran up the clock' },
      { time: 4, text: 'The clock struck one' },
      { time: 5.5, text: 'The mouse ran down' },
      { time: 7, text: 'Hickory, dickory, dock' }
    ]
  },
  
  johnjacob: {
    name: 'John Jacob Jingleheimer Schmidt',
    audioUrl: '/audio/nursery-rhymes/john-jacob.mp3',
    lyrics: [
      { time: 0, text: 'John Jacob Jingleheimer Schmidt' },
      { time: 2.5, text: 'His name is my name too' },
      { time: 5, text: 'Whenever we go out' },
      { time: 7, text: 'The people always shout' },
      { time: 9, text: 'There goes John Jacob Jingleheimer Schmidt' },
      { time: 11.5, text: 'Na-na-na-na-na-na-na-na' }
    ]
  }
};

/**
 * Function to play a nursery rhyme by key
 * @param {string} rhymeKey - The key from nurseryRhymes object (e.g., 'twinkle', 'mary')
 */
function playRhyme(rhymeKey) {
  const rhyme = nurseryRhymes[rhymeKey];
  
  if (!rhyme) {
    console.warn(`Nursery rhyme "${rhymeKey}" not found`);
    return;
  }
  
  console.log(`Playing: ${rhyme.name}`);
  audioManager.playNurseryRhyme(rhyme);
  audioManager.playSFX('success'); // Play success sound when starting
}

/**
 * Function to get all available rhymes
 * @returns {Array} Array of rhyme objects with name and key
 */
function getAllRhymes() {
  return Object.entries(nurseryRhymes).map(([key, rhyme]) => ({
    key,
    name: rhyme.name
  }));
}

/**
 * Function to get a specific rhyme data
 * @param {string} rhymeKey - The key of the rhyme
 * @returns {Object} The rhyme object with audio and lyrics
 */
function getRhymeData(rhymeKey) {
  return nurseryRhymes[rhymeKey];
}
