interface SSRPageProps {
  advice: string
}

const SSRPage = ({advice}: SSRPageProps) => {
  return (
    <div>
      <div>I'm a Server Side Rendered (SSR) page, the <strong>entire page</strong> is rendered on the server and passed as HTML to the browser!</div>
      <div>
        I got a random advice:{' '}{advice}
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const url = "https://api.adviceslip.com/advice"
  const advice = await fetch(url)
  const data = await advice.json()
  return {
    props: {
      advice: data.slip.advice
    }
  }
}

export default SSRPage