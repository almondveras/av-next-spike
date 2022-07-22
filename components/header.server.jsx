import { useEffect, useState } from "react"

const API_URL = "https://av-next-spike.vercel.app/api/header"
let cache

async function fetchData() {
  const response = await fetch(API_URL)
  return response.json()
}

function useData() {
  if (!cache) {
    let data
    let promise
    cache = () => {
      if (data !== undefined) return data
      if (!promise) promise = fetchData().then((r) => (data = r))
      throw promise
    }
  }
  return cache()
}


const DynamicHeader = () => {
  const data = useData()
  console.log(data)
  return (
    <div>I&apos;m a header with data {JSON.stringify(data)}</div>
  )
}

export default DynamicHeader