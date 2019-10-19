import React from 'react'

// Create an interface of props to pass into React.FC
interface Props {
  val: string
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void // get this from hovering over onChange
}

const TextField: React.FC<Props> = ({ handleChange, val }) => {
  return (
    <div>
      <input onChange={handleChange} value={val} />
    </div>
  )
}

export default TextField