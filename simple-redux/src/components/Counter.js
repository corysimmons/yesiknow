import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Counter = () => {
  const count = useSelector(state => state.count)
  const dispatch = useDispatch()

  return (
    <div>
      <b>Count:</b> {count}<br />

      <div style={{ display: 'flex' }}>
        <button onClick={() => dispatch({
          type: 'INCREMENT'
        })}>Increment</button>

        <button onClick={() => dispatch({
          type: 'DECREMENT'
        })}>Decrement</button>
      </div>
    </div>
  )
}

export default Counter