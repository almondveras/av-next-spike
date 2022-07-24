interface SSGPageProps {
  staticProp: string
}

const SSGPage = ({staticProp}: SSGPageProps) => {
  return (
    <>
      <div>
        I'm a Server Site Generated page, HTML is sent from the CDN!
      </div>
      <div>
        I recieved a prop: {staticProp}
      </div>
    </>
  )
}

export function getStaticProps () {
  return {
    props: {
      staticProp: "This can only change on build time"
    }
  }
}

export default SSGPage