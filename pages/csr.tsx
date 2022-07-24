import { useEffect, useState } from "react"

const CSRPage = () => {
  const [advice, setAdvice] = useState('')

  useEffect(() => {
    const url = "https://api.adviceslip.com/advice"
    fetch(url).then(r => r.json()).then(r => setAdvice(r.slip.advice))

  }, [])
  
  return (
    <div>
      <div>I'm a Server Side Rendered (SSR) page, the <strong>entire page</strong> is rendered on the server and passed as HTML to the browser!</div>
      <div>
        I'm getting a random advice:{' '}{advice}
      </div>
    </div>
  )
}

export default CSRPage