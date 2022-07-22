import React from 'react'
import { Suspense } from 'react'
import Header from '../components/header.server'

export default function RSC() {
  return (
    <>
      <Suspense fallback={"Loading..."}>
        <Header />
      </Suspense>
      <p>
      The rest already loaded
      </p>
    </>
  )
}