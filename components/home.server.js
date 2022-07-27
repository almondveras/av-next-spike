import React, { Suspense } from 'react'

import Content from './content.client'
import Advice from './advice.server'

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to React Server Components</h1>
      <Content />
      <Suspense fallback={'Loading...'}>
        <Advice />
      </Suspense>
    </div>
  )
}
