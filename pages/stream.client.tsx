import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import DynamicHeader from '../components/header.server'

export default function StreamPage() {
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