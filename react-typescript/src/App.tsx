import React, { useState } from 'react'
import TextField from './components/TextField'

const App: React.FC = () => {
  const [text, setText] = useState()
  const [label] = useState<string>('Controlled input value:') // You can pass types/unions/interfaces to React type definition Generics as well.

  return (
    <div>
      <TextField val={text} handleChange={e => {
        e.preventDefault()
        setText(e.target.value)
      }} />

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <h2>{label}</h2>

        {text && (
          <p style={{ marginLeft: 10 }}>
            {text}
          </p>
        )}
      </div>
    </div>
  )
}

export default App
