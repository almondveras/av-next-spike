import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import DynamicHeader from '../components/header.server'

// const DynamicHeader = dynamic(() => import('../components/header'), {
//   suspense: true,
// })

export default function Home() {
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