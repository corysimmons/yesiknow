import React, { useState } from 'react'
import axios from 'axios'

const Header = () => {
  const [email, setEmail] = useState('bob@example.com')
  const [password, setPassword] = useState('12345')
  
  return (
    <div>
      <h3>Header</h3>

      <form onSubmit={e => {
        e.preventDefault()

        axios
          .post('http://localhost:5000/login', {
            email,
            password
          })
          .then(res => {
            if (res.status === 200) {
              const accessToken = res.data
              console.log(`hey you got an access token that contains the user's email and an expiration date:\n${accessToken}`)

              console.log(`let's put that in localStorage`)
              window.localStorage.setItem('accessToken', accessToken)
            }
          })
          .catch(err => {
            console.error(err)
          })
      }}>
        Login component within Header component:<br />
        <input type="text" placeholder="email" value={email} onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Header