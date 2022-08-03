import CSRCharacters from "../../components/CSRCharacters";
import React from "react";
import { Suspense } from "react"

const CSRPage = () => {
  return (
    <div>
      <h2>Welcome to Client Side Rendering!</h2>
      <div>I'm a Client Side Rendered (CSR) page where data is fetched on the client-side!</div>
      <Suspense fallback={'Loading...'}>
        <CSRCharacters />
      </Suspense>
    </div>
  )
}

export default CSRPage