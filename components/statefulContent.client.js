import React from "react"
import { useState } from "react"

export default function StatefulContent() {

  const [data, setData] = useState('')
  return (
    <div>
      <button onClick={() => {
        setData(data ? '': 'State works!!')
      }}>
        Click me to update the state
      </button>
      <p>
        <strong>{data}</strong>
      </p>
    </div>
  )
}