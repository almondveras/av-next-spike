interface SSRPageProps {
  advice: string
}

const SSRPage = ({advice}: SSRPageProps) => {
  return (
    <div>
      <h2>
        Welcome to Server Side Rendered (SSR)
      </h2>
      <p>I'm a Server Side Rendered (SSR) page, the <strong>entire page</strong> is rendered on the server and passed as HTML to the browser!</p>
      <div>
        I got a random advice:
        <p>
          {advice}
        </p>
      </div>
    </div>
  )
}

// exporting getServerSideProps in Next.js implies this page is Server Side Rendered
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