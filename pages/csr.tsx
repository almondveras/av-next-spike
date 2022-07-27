import { useEffect, useState } from "react"

const CSRPage = () => {
  const [advice, setAdvice] = useState('')

  useEffect(() => {
    const url = "https://api.adviceslip.com/advice"
    fetch(url).then(r => r.json()).then(r => setAdvice(r.slip.advice))

  }, [])
  
  return (
    <div>
      <div>I'm a Client Side Rendered (CSR) page, averas to add!</div>
      <div>
        I'm getting a random advice:
        <p>{advice}</p>
      </div>
    </div>
  )
}

export default CSRPage