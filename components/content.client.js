import React, {useState} from "react"

export default function Content() { 
  const [data, setData] = useState('')
  return (
    <div style={{
      width: '80%',
      height: 'fit-content',
      padding: '16px',
      marginTop: '16px',
      backgroundColor: 'lightblue',
      boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
      transition: '0.3s',
    }}>
      <div>I'm a client-rendered server component!</div>
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
    </div>
  )  
}
