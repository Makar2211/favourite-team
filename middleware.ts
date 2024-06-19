import { cookies } from 'next/headers';
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
	const pathname = request.nextUrl.pathname;
	const tokenUser = cookies().get('token')?.value;


	if (!tokenUser && pathname !== '/sign-up' && pathname !== '/sign-in') {
		return NextResponse.redirect(new URL('/sign-up', request.url));
	}

	if (tokenUser && (pathname === '/sign-up' || pathname === '/sign-in')) {
		return NextResponse.redirect(new URL('/', request.url));
	}

	return NextResponse.next();
}

export const config = {
	matcher: ["/((?!api|assets|.*\\..*|_next).*)"],
};