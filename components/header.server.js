import React from "react"
import { useData } from "../libs/use-fetch"

// const API_URL = "https://av-next-spike.vercel.app/api/header"
// let cache

// async function fetchData() {
//   const response = await fetch(API_URL)
//   return response.json()
// }

// function useData() {
//   if (!cache) {
//     let data
//     let promise
//     cache = () => {
//       if (data !== undefined) return data
//       if (!promise) promise = fetchData().then((r) => (data = r))
//       throw promise
//     }
//   }
//   return cache()
// }


export default function Header() {
  // const data = useData()

  // averas need to understand why and how we're using useData
  const apiKey = `/api/header`
  const data = useData(apiKey, (key) => fetch(key).then(r => r.json()), {
    revalidate: 10,
  })

  console.log(data)
  
  return (
    <div>
      Im a header with data {JSON.stringify(data)}
    </div>
  )
}
