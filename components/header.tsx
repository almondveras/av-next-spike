import { useEffect, useState } from "react"

const useFetch = async (apiKey: string) => {
  return (await fetch(apiKey)).json()
}

const DynamicHeader = () => {
  const apiKey = "https://av-next-spike.vercel.app/api/header"
  // const data = useData(apiKey, key => fetch(key).then(r => r.json())
  // const apiKey = 'https://nextjs-spike-cc43nhke3-nextjs-contino-spike.vercel.app/api/header'
  const [data, setData] = useState()
  useEffect(() => {
    fetch(apiKey).then(r => {
      const body = r.json()
      console.log(body)
      return body
    }).then(r => {setData(r)})
  }, [])
  console.log(data)
  return (
    <div>I&apos;m a header with data {data}</div>
  )
}

export default DynamicHeader