import './Filter.css'
import { useState } from 'react'

const Filter = ({ onChange }) => {
  const [inputValue, setInputValue] = useState('')

  const handleChange = (evt) => {
    const value = evt.target.value
    setInputValue(value)
    onChange(value)
  }

  return (
    <div>
      <p className="text">Find contacts by name</p>
      <input
        className="input"
        type="text"
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  )
}

export default Filter
