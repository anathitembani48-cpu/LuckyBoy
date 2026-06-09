export default function Home() {
  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      speechSynthesis.cancel();
      const msg = new SpeechSynthesisUtterance(text);
      msg.lang = 'en-US';
      msg.rate = 0.8;
      speechSynthesis.speak(msg);
    } else {
      alert('Voice not supported');
    }
  }

  return (
    <div style={{padding: '40px', textAlign: 'center', fontFamily: 'Arial'}}>
      <h1>KiddoLearn TanStack 🔊</h1>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '15px', maxWidth: '400px', margin: '0 auto'}}>
        {[1,2,3,4,5,6,7,8,9,10].map(n => (
          <button
            key={n}
            onClick={() => speak(n.toString())}
            style={{
              fontSize: '2rem',
              padding: '30px',
              borderRadius: '20px',
              border: 'none',
              background: '#667eea',
              color: 'white',
              cursor: 'pointer'
            }}
          >
            {n}
          </button>
        ))}
      </div>
      <p style={{marginTop: '30px', color: '#666'}}>Tap a number to hear it</p>
    </div>
  )
} 
