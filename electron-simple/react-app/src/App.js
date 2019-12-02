import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('')

  useEffect(() => {
    if (window.isElectron) {
      window.ipcRenderer.send('ahoy')
    }
  }, [])

  return (
    <div className="App">
      <h1>Hello React in an Electron App</h1>
      <p>Type something and hit the button to save a txt file to your Desktop.</p>
      <input type="text" placeholder="Your text" onChange={e => setText(e.currentTarget.value)} value={text} />
      <button onClick={() => window.ipcRenderer.send('oop', text)}>Click me</button>
    </div>
  );
}

export default App;
