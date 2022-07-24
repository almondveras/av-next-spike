import React, { Suspense } from "react"
import HomePage from "../components/home.server"

export default function Home() {
  return (
    <HomePage />  
  )
}

export const config = {
  runtime: 'experimental-edge',
}
