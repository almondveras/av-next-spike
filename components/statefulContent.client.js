import React from "react"
import { useState } from "react"

export default function StatefulContent() {

  const [data, setData] = useState('')
  return (
    <div className="stateful-content">
      <button onClick={() => {
        setData(data ? '': 'State works!!')
      }}>
        Click to update
      </button>
      <h3>{data}</h3>
    </div>
  )
}