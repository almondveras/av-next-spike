
const useFetch = async (apiKey: string) => {
  return (await fetch(apiKey)).json()
}

const DynamicHeader = () => {
  const apiKey = "https://av-next-spike.vercel.app/api/header"
  // const data = useData(apiKey, key => fetch(key).then(r => r.json())
  // const apiKey = 'https://nextjs-spike-cc43nhke3-nextjs-contino-spike.vercel.app/api/header'
  const data = fetch(apiKey).then(r => {return r})
  // console.log(data)
  return (
    // <div>I'm a header with data {JSON.stringify(data)}</div>
    <div>I&apos;m a header with data</div>
  )
}

export default DynamicHeader