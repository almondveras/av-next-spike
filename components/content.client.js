import React from "react"
import StatefulContent from "./statefulContent.client"

export default function Content() { 
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
      <div>Im a client rendered component!</div>
      <StatefulContent />
    </div>
  )  
}