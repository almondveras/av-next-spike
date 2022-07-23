import React from 'react'
import { Suspense } from 'react'
import Header from '../components/header.server'

export default function RSC({dummy}) {
  return (
    <div>
      <Suspense fallback={"Loading..."}>
        <Header />
      </Suspense>

      <p>
      The rest already loaded
      </p>
    </div>
  )
}

export async function getServerSideProps() {
  return {
    props: {
      dummy: 'hi'
    },
  }
}
