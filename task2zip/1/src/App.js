import React from 'react'
import { useState } from 'react'
import '../src/App.css'

const App = () => {
  const [text, setText] = useState('')
  const wordCount = text.trim().split(" ").length

  const handleChange = (e) => {
    setText(e.target.value)
  }

  return (
    <div className='container'>
      <h1>Responsive Paragraph Word Counter</h1>
      <textarea rows="10" cols="50"  
      value={text}
      onChange={handleChange}/>
      <p>Word Count: {wordCount}</p>

    </div>
  )
}

export default App
