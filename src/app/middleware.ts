import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { withAuth } from 'next-auth/middleware';

import { getPublicUrl } from '../helpers/getPublicUrl';

export default withAuth(
  async (req) => {
    const token = await getToken({ req });
    const isAuth = !token;
    const isAuthPage = req.nextUrl.pathname.startsWith(
      '/login' || req.nextUrl.pathname.startsWith(getPublicUrl.signup())
    );

    if (isAuthPage) {
      if (isAuth) {
        return NextResponse.redirect(new URL('/', req.url));
      }

      return null;
    }

    if (!isAuth) {
      let from = req.nextUrl.pathname;
      if (req.nextUrl.search) {
        from += req.nextUrl.search;
      }

      return NextResponse.redirect(new URL(`/login?from=${encodeURIComponent(from)}`, req.url));
    }
  },
  {
    callbacks: {
      // eslint-disable-next-line @typescript-eslint/require-await
      async authorized() {
        // This is a work-around for handling redirect on auth pages.
        // We return true here so that the middleware function above
        // is always called.
        return true;
      }
    }
  }
);

export const config = {
  matcher: ['/login', '/signup', '/']
};
