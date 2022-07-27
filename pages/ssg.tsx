import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

interface SSGPageProps {
  staticProp: string
  advice: string
}

const SSGPage = ({staticProp, advice}: SSGPageProps) => {
  return (
    <>
      <div>
        I'm a Server Site Generated page, HTML is sent from the CDN!
      </div>
      <p>
        I recieved a prop: {staticProp}
      </p>
      <p>
        I received a random advice: {advice}
      </p>
    </>
  )
}

export async function getStaticProps () {
  const url = "https://api.adviceslip.com/advice"
  // const { data: advice, error } = useSWR(url, fetcher)
  const data = await fetcher(url)

  return {
    props: {
      staticProp: "This can only change on build time",
      advice: data.slip.advice
    }
  }
}

export default SSGPage