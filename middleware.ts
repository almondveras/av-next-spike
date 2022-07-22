// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  // add a 2sec delay for specific api paths
  await new Promise(r => setTimeout(r, 2000))
  return NextResponse.next()
}

export const config = {
  matcher: '/api/header',
}