const fetcher = (url: string) => fetch(url).then((res) => res.json());

interface SSGPageProps {
  staticProp: string
  advice: string
}

const SSGPage = ({staticProp, advice}: SSGPageProps) => {
  return (
    <>
      <h2>
        Welcome to Static Site Generated (SSG)
      </h2>
      <p>
        I'm a Server Site Generated page, HTML is sent from the CDN!
      </p>
      <p>
        I recieved a prop: {staticProp}
      </p>
      <p>
        I received a random advice: {advice}
      </p>
    </>
  )
}

// exporting getStaticProps in Next.js implies this page is using Static Site Generation
export async function getStaticProps () {
  const url = "https://api.adviceslip.com/advice"
  const data = await fetcher(url)

  return {
    props: {
      staticProp: "This can only change on build time",
      advice: data.slip.advice
    }
  }
}

export default SSGPage