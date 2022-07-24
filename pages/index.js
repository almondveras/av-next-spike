import Link from "next/link"
import React from "react"

const HomePage = () => {
  return (
    <>
      <h1>Welcome to Next.js!</h1>
      <li>
        <Link href={'/ssg'}>
          Static Site Generated - SSG
        </Link>
      </li>
      <li>
      <Link href={'/ssr'}>
        Server Side Rendered - SSR
      </Link>
      </li>
      <li>
      <Link href={'/csr'}>
        Client Side Rendered - CSR
      </Link>
      </li>
      <li>
      <Link href={'/rsc'}>
        React Server Components - RSC (experimental!)
      </Link>
      </li>
      <li>
      <Link href={'/non-existent-path'}>
        Where do non existent paths go?
      </Link>
      </li>
    </>
  )
}

export default HomePage