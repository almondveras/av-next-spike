import React from 'react'
import { Suspense } from 'react'
import DynamicHeader from '../components/header.server'

export default function RSC() {
  return (
    <>
      <Suspense fallback={"Loading..."}>
        <DynamicHeader />
      </Suspense>
      <p>
      The rest already loaded
      </p>
    </>
  )
}