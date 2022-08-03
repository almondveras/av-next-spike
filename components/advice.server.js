import React from "react"
import fetchData from "../lib/fetch-data"
import useData from "../lib/use-data"

// This is a server-rendered Server Component
export default function Advice() {
  const url = "https://api.adviceslip.com/advice"

  const { data } = useData(`advice`, () => fetchData(url, 2))

  return (
    <div style={{
      width: '90%',
      height: 'fit-content',
      padding: '16px',
      marginTop: 8,
      backgroundColor: 'lightcoral',
      boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
      transition: '0.3s'
    }}>
      <p>I'm a server-rendered server component, with a bit of delay in the API call</p>
      <p>Here's an advice: {data.slip.advice}</p>
    </div>
  )
}
