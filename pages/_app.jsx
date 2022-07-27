import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import React from 'react'

function MyApp({ Component, pageProps }) {
  const [queryClient] = React.useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
       <Hydrate state={pageProps.dehydratedState}>
         <Component {...pageProps} />
       </Hydrate>
     </QueryClientProvider>
  )
}

export default MyApp
