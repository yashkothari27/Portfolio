import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Simplified middleware that only handles essential paths
export function middleware(request: NextRequest) {
  // Add your authentication/authorization logic here if needed
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Update these patterns to match your needs
    '/about/:path*',
    '/projects/:path*',
    '/skills/:path*',
    '/contact/:path*'
  ],
}; 