// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  await new Promise(r => setTimeout(r, 2000))
  return NextResponse.next()
}

export const config = {
  matcher: '/api/header',
}