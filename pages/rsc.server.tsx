import React, { Suspense } from "react"
import Profile from "../components/advice.server"
import Content from "../components/content.client"

export default function RSC() {
  return (
    <>
      <h1>Welcome to React Server Components</h1>
      <Content />
      {/* Suspense is a React 18 feature */}
      <Suspense fallback={'Loading...'}>
        <Profile />
      </Suspense>
    </>
  )
}

export const config = {
  runtime: 'experimental-edge',
  serverComponents: true
}
