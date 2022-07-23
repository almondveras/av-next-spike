import React from 'react'
import { Suspense } from 'react'
import Header from '../components/header.server'
import RSCContent from '../components/rsccontent.client'

export default function RSC() {

  return (
    <div>
      <Suspense fallback={"Loading..."}>
        <Header />
      </Suspense>
      <RSCContent />
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
