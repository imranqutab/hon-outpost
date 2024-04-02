import Middleware from './middleware'
import { Auth, authMiddleware, ExpiredAuthSessionError } from '~auth/runtime'

// Active schemes
import { CookieScheme } from '~auth/runtime'

Middleware.auth = authMiddleware

export default function (ctx, inject) {
  // Options
  const options = {
  "resetOnError": false,
  "ignoreExceptions": false,
  "scopeKey": "scope",
  "rewriteRedirects": true,
  "fullPathRedirect": false,
  "watchLoggedIn": true,
  "redirect": true,
  "vuex": {
    "namespace": "auth"
  },
  "cookie": {
    "prefix": "auth.",
    "options": {
      "path": "/",
      "sameSite": "lax",
      "secure": true,
      "expires": 90
    }
  },
  "localStorage": false,
  "defaultStrategy": "cookie"
}

  // Create a new Auth instance
  const $auth = new Auth(ctx, options)

  // Register strategies
  // cookie
  $auth.registerStrategy('cookie', new CookieScheme($auth, {
  "cookie": {
    "name": null
  },
  "token": {
    "required": false,
    "type": false,
    "maxAge": 129600000
  },
  "user": {
    "property": false,
    "autoFetch": false
  },
  "endpoints": {
    "login": {
      "url": "/api/v1/login",
      "method": "post"
    },
    "logout": {
      "url": "/api/v1/logout",
      "method": "post"
    },
    "user": {
      "url": "/api/v1/me",
      "method": "post"
    },
    "csrf": false
  },
  "name": "cookie"
}))

  // Inject it to nuxt context as $auth
  inject('auth', $auth)
  ctx.$auth = $auth

  // Initialize auth
  return $auth.init().catch(error => {
    if (process.client) {
      // Don't console log expired auth session errors. This error is common, and expected to happen.
      // The error happens whenever the user does an ssr request (reload/initial navigation) with an expired refresh
      // token. We don't want to log this as an error.
      if (error instanceof ExpiredAuthSessionError) {
        return
      }

      console.error('[ERROR] [AUTH]', error)
    }
  })
}
