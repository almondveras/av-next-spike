import React from "react";
import { Suspense } from "react"
import CSRAdvice from "../components/CSRCharacters";



const CSRPage = () => {
  return (
    <div>
      <h2>Welcome to Client Side Rendering!</h2>
      <div>I'm a Client Side Rendered (CSR) page where data is fetched on the client-side!</div>
      <Suspense fallback={'Loading...'}>
        <CSRAdvice />
      </Suspense>
    </div>
  )
}

export default CSRPage