import { dehydrate, QueryClient, useQuery } from 'react-query'
import { ReactQueryDevtools } from 'react-query-devtools'

import gql from 'graphql-tag'
import { useCharactersQuery } from '../graphql/generated'
 
gql`
query Characters {
    characters {
      results {
        created
        episode {
          name
        }
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
const endpoint = 'https://rickandmortyapi.com/graphql'

interface SSRReactQueryPageProps {
}


const SSRReactQueryPage = ({}: SSRReactQueryPageProps) => {
  const {data} = useCharactersQuery()

  // This query was not prefetched on the server and will not start
  // fetching until on the client, both patterns are fine to mix
  // const { data: otherData } = useQuery('csr-useCharacters', useCharacters)

  return (
    <div>
      <div>I'm a Server Side Rendered (SSR) page, queried via react-query.</div>
      <div>
        Rick and Morty characters from graphql API:{' '}
      </div>
      <p>
        {data ? JSON.stringify(data): 'Loading...'}
      </p>
      <ReactQueryDevtools />
    </div>
  )
}

export async function getServerSideProps() {
  const queryClient = new QueryClient() 
  await queryClient.prefetchQuery(useCharactersQuery.getKey(), () => useCharactersQuery.fetcher({}))
  // await queryClient.prefetchQuery(useCharactersQuery.getKey(), () => useCharactersQuery.fetcher({
  //   endpoint,
  //   fetchParams: {
  //     headers: [['content-type', 'application/json']]
  //   }
  // }))

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  }
}

export default SSRReactQueryPage