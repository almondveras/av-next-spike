import { dehydrate, QueryClient, useQuery } from 'react-query'
import { ReactQueryDevtools } from 'react-query-devtools'

import gql from 'graphql-tag'
// import { CharactersDocument, fetcher, useCharactersQuery } from '../graphql/generated'
 
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

interface SSRReactQueryPageProps {
}

const endpoint = 'https://rickandmortyapi.com/graphql'

const SSRReactQueryPage = ({}: SSRReactQueryPageProps) => {
  // const { data } = useCharactersQuery({
  //   endpoint
  // })
  // averas to fix
  // const { data } = useQuery(['Characters'], async () => await fetcher(endpoint, {} , CharactersDocument))
 
  // This query was not prefetched on the server and will not start
  // fetching until on the client, both patterns are fine to mix
  // const { data: otherData } = useQuery('csr-useCharacters', useCharacters)


  return (
    <div>
      <div>I'm a Server Side Rendered (SSR) page, queried via react-query.</div>
      <div>
        {/* Rick and Morty characters from graphql API:{' '}{data} */}
      </div>
      <ReactQueryDevtools />
    </div>
  )
}

export async function getServerSideProps() {
  // const queryClient = new QueryClient() 
  // await queryClient.prefetchQuery(['Characters'], async () => await fetcher(endpoint,{} , CharactersDocument))
  return {
    props: {
      // dehydratedState: dehydrate(queryClient),
    },
  }
}

export default SSRReactQueryPage