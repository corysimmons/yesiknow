import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import axios from 'axios'

function App() {
  const [pokemon, setPokemon] = useState('')
  const loadSecret = () => {
    // On page load, see if there is a valid access token
    const accessToken = window.localStorage.getItem('accessToken')
    if (window.localStorage.getItem('accessToken')) {
      axios
        .post('http://localhost:5000/load-secret', {
          accessToken
        })
        .then(res => {
          setPokemon(res.data)
        })
        .catch(err => {
          console.error(err)
        })
    }
  }
  
  useEffect(() => {
    loadSecret()
  }, [])

  return (
    <div>
      <Header />
      <h2>App component</h2>

      <h3>Who's that Pokemon?!</h3>
      <button onClick={() => loadSecret()}>Load secret pokemon if you are logged in</button>
      {pokemon && <p>{pokemon.species.name}</p>}
    </div>
  )
}

export default App;
