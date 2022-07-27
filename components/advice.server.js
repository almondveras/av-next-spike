import React from "react"
import fetchData from "../lib/fetch-data"
import useData from "../lib/use-data"

export default function Profile() {
  const url = "https://api.adviceslip.com/advice"

  const { data } = useData(`advice`, () => fetchData(url, 2))

  return (
    <div style={{
      width: '80%',
      height: 'fit-content',
      padding: '16px',
      backgroundColor: 'lightcoral',
      boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
      transition: '0.3s'
    }}>
      <div>I'm a server-rendered server component, with a bit of delay in the API call</div>
      <div>Here's an advice: {data.slip.advice}</div>
    </div>
  )
}
