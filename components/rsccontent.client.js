import React from "react"
import { useState } from "react"

export default function RSCContent() {
  const [text, setText] = useState('')

  return (
    <>
      <p style={{
        color: 'blue'
      }}>
      The rest already loaded
      </p>
      
      <p>{text}</p>
      
      <button onClick={() => {
        console.log('j')
        setText('jj')
      }}>click</button>
    </>
  )
}