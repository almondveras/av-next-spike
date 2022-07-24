import React from "react"
import fetchData from "../lib/fetch-data"
import useData from "../lib/use-data"

export default function Profile() {
  const url = "https://api.adviceslip.com/advice"

  const { data } = useData(`randomData`, () => fetchData(url, 1))
  console.log(data)

  return (
    <>
      <div>Im a Profile</div>
      <div>{JSON.stringify(data)}</div>
    </>
  )
}
