import { dehydrate, QueryClient, useQuery } from 'react-query'

import gql from 'graphql-tag'
import { useCharactersQuery } from '../graphql/generated'
import Character from '../components/character'
 
gql`
query Characters {
    characters {
      results {
        created
        gender
        id
        image
        location {
          name
        }
        name
        origin {
          name
        }
        species
        status
        type
      }
    }
  }
`



interface SSRReactQueryPageProps {
}

const SSRReactQueryPage = ({}: SSRReactQueryPageProps) => {
  const {data} = useCharactersQuery()
  const charactersData = data?.characters?.results

  return (
    <div>
      <h2>Welcome to SSR + Codegen + React-query</h2>
      <div>I'm a Server Side Rendered (SSR) page, queried via react-query.</div>
      <div>
        Rick and Morty characters from graphql API:{' '}
      </div>
      {
        charactersData?.map((character) => <Character key={character?.id} {...character} />)
      }
    </div>
  )
}

export async function getServerSideProps() {
  const queryClient = new QueryClient() 
  await queryClient.prefetchQuery(useCharactersQuery.getKey(), () => useCharactersQuery.fetcher({}))

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  }
}

export default SSRReactQueryPage