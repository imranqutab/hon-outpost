import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _10586262 = () => interopDefault(import('../pages/dashboard.vue' /* webpackChunkName: "pages/dashboard" */))
const _1d13aaa4 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _4508b7cc = () => interopDefault(import('../pages/nfts.vue' /* webpackChunkName: "pages/nfts" */))
const _2ea7354f = () => interopDefault(import('../pages/nfts/index.vue' /* webpackChunkName: "pages/nfts/index" */))
const _588f2440 = () => interopDefault(import('../pages/nfts/activities.vue' /* webpackChunkName: "pages/nfts/activities" */))
const _6016894c = () => interopDefault(import('../pages/nfts/admin.vue' /* webpackChunkName: "pages/nfts/admin" */))
const _a359f798 = () => interopDefault(import('../pages/nfts/collection/index.vue' /* webpackChunkName: "pages/nfts/collection/index" */))
const _04cd3dd2 = () => interopDefault(import('../pages/nfts/gallery/index.vue' /* webpackChunkName: "pages/nfts/gallery/index" */))
const _8221dae2 = () => interopDefault(import('../pages/nfts/market.vue' /* webpackChunkName: "pages/nfts/market" */))
const _695b5b16 = () => interopDefault(import('../pages/nfts/mint.vue' /* webpackChunkName: "pages/nfts/mint" */))
const _10af7701 = () => interopDefault(import('../pages/nfts/official/index.vue' /* webpackChunkName: "pages/nfts/official/index" */))
const _1b272d66 = () => interopDefault(import('../pages/nfts/profile.vue' /* webpackChunkName: "pages/nfts/profile" */))
const _51fe4dfb = () => interopDefault(import('../pages/nfts/search.vue' /* webpackChunkName: "pages/nfts/search" */))
const _78e98a78 = () => interopDefault(import('../pages/nfts/collection/_series.vue' /* webpackChunkName: "pages/nfts/collection/_series" */))
const _19bbd496 = () => interopDefault(import('../pages/nfts/gallery/_series.vue' /* webpackChunkName: "pages/nfts/gallery/_series" */))
const _941703f6 = () => interopDefault(import('../pages/nfts/official/_series.vue' /* webpackChunkName: "pages/nfts/official/_series" */))
const _34f5e0d3 = () => interopDefault(import('../pages/nfts/_series.vue' /* webpackChunkName: "pages/nfts/_series" */))
const _300f719e = () => interopDefault(import('../pages/pool.vue' /* webpackChunkName: "pages/pool" */))
const _1c44e4f4 = () => interopDefault(import('../pages/pool/index.vue' /* webpackChunkName: "pages/pool/index" */))
const _0b33cfc3 = () => interopDefault(import('../pages/pool/add.vue' /* webpackChunkName: "pages/pool/add" */))
const _d7e7f76c = () => interopDefault(import('../pages/pool/create.vue' /* webpackChunkName: "pages/pool/create" */))
const _38d5c50e = () => interopDefault(import('../pages/pool/pools.vue' /* webpackChunkName: "pages/pool/pools" */))
const _f82b505c = () => interopDefault(import('../pages/pool/remove.vue' /* webpackChunkName: "pages/pool/remove" */))
const _1511797c = () => interopDefault(import('../pages/proposals.vue' /* webpackChunkName: "pages/proposals" */))
const _1a734eec = () => interopDefault(import('../pages/publish.vue' /* webpackChunkName: "pages/publish" */))
const _536c078d = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _6906c78a = () => interopDefault(import('../pages/_sort/index.vue' /* webpackChunkName: "pages/_sort/index" */))
const _7910d765 = () => interopDefault(import('../pages/_user.vue' /* webpackChunkName: "pages/_user" */))
const _891503b0 = () => interopDefault(import('../pages/_user/index.vue' /* webpackChunkName: "pages/_user/index" */))
const _251acbe4 = () => interopDefault(import('../pages/_user/comments.vue' /* webpackChunkName: "pages/_user/comments" */))
const _5d4bd0eb = () => interopDefault(import('../pages/_user/followers.vue' /* webpackChunkName: "pages/_user/followers" */))
const _29684167 = () => interopDefault(import('../pages/_user/following.vue' /* webpackChunkName: "pages/_user/following" */))
const _67f423de = () => interopDefault(import('../pages/_user/replies.vue' /* webpackChunkName: "pages/_user/replies" */))
const _604a8e40 = () => interopDefault(import('../pages/_user/scheduledposts.vue' /* webpackChunkName: "pages/_user/scheduledposts" */))
const _f667fb84 = () => interopDefault(import('../pages/_user/scheduledposts-orig.vue' /* webpackChunkName: "pages/_user/scheduledposts-orig" */))
const _46566e86 = () => interopDefault(import('../pages/_user/settings.vue' /* webpackChunkName: "pages/_user/settings" */))
const _1c677e13 = () => interopDefault(import('../pages/_user/wallet.vue' /* webpackChunkName: "pages/_user/wallet" */))
const _39024105 = () => interopDefault(import('../pages/_sort/_tag/index.vue' /* webpackChunkName: "pages/_sort/_tag/index" */))
const _92a5f89a = () => interopDefault(import('../pages/feed.vue' /* webpackChunkName: "pages/_user/feed" */))
const _21873496 = () => interopDefault(import('../pages/post.vue' /* webpackChunkName: "pages/_user/_post" */))

const _2ccd4d7a = () => interopDefault(import('../pages/static.vue' /* webpackChunkName: "pages/about" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/dashboard",
    component: _10586262,
    name: "dashboard"
  }, {
    path: "/login",
    component: _1d13aaa4,
    name: "login"
  }, {
    path: "/nfts",
    component: _4508b7cc,
    children: [{
      path: "",
      component: _2ea7354f,
      name: "nfts"
    }, {
      path: "activities",
      component: _588f2440,
      name: "nfts-activities"
    }, {
      path: "admin",
      component: _6016894c,
      name: "nfts-admin"
    }, {
      path: "/@:user/collection",
      component: _a359f798,
      name: "user-collection"
    }, {
      path: "/@:user/gallery",
      component: _04cd3dd2,
      name: "user-gallery"
    }, {
      path: "market",
      component: _8221dae2,
      name: "nfts-market"
    }, {
      path: "mint",
      component: _695b5b16,
      name: "nfts-mint"
    }, {
      path: "official",
      component: _10af7701,
      name: "nfts-official"
    }, {
      path: "profile",
      component: _1b272d66,
      name: "nfts-profile"
    }, {
      path: "search",
      component: _51fe4dfb,
      name: "nfts-search"
    }, {
      path: "/@:user/collection/:series",
      component: _78e98a78,
      name: "user-collection-series"
    }, {
      path: "/@:user/gallery/:series",
      component: _19bbd496,
      name: "user-gallery-series"
    }, {
      path: "official/:series",
      component: _941703f6,
      name: "nfts-official-series"
    }, {
      path: ":series",
      component: _34f5e0d3,
      name: "nfts-series"
    }]
  }, {
    path: "/pool",
    component: _300f719e,
    children: [{
      path: "",
      component: _1c44e4f4,
      name: "pool"
    }, {
      path: "add",
      component: _0b33cfc3,
      name: "pool-add"
    }, {
      path: "create",
      component: _d7e7f76c,
      name: "pool-create"
    }, {
      path: "pools",
      component: _38d5c50e,
      name: "pool-pools"
    }, {
      path: "remove",
      component: _f82b505c,
      name: "pool-remove"
    }]
  }, {
    path: "/proposals/:id?",
    component: _1511797c,
    name: "proposals"
  }, {
    path: "/publish",
    component: _1a734eec,
    name: "publish"
  }, {
    path: "/",
    component: _536c078d,
    name: "index"
  }, {
    path: "/:sort(hot|trending|promoted|payout|payout_comments|muted|created|curated)",
    component: _6906c78a,
    name: "sort"
  }, {
    path: "/@:user",
    component: _7910d765,
    children: [{
      path: "",
      component: _891503b0,
      name: "user"
    }, {
      path: "comments",
      component: _251acbe4,
      name: "user-comments"
    }, {
      path: "followers",
      component: _5d4bd0eb,
      name: "user-followers"
    }, {
      path: "following",
      component: _29684167,
      name: "user-following"
    }, {
      path: "replies",
      component: _67f423de,
      name: "user-replies"
    }, {
      path: "scheduledposts",
      component: _604a8e40,
      name: "user-scheduledposts"
    }, {
      path: "scheduledposts-orig",
      component: _f667fb84,
      name: "user-scheduledposts-orig"
    }, {
      path: "settings",
      component: _46566e86,
      name: "user-settings"
    }, {
      path: "wallet",
      component: _1c677e13,
      name: "user-wallet"
    }]
  }, {
    path: "/:sort(hot|trending|promoted|payout|payout_comments|muted|created|curated)/:tag",
    component: _39024105,
    name: "sort-tag"
  }, {
    path: "/@:user/feed",
    component: _92a5f89a,
    name: "user-feed"
  }, {
    path: "/@:user/:post",
    component: _21873496,
    name: "user-post"
  }, {
    path: "/:tag/@:user/:post",
    redirect: {"name":"user-post"},
    name: "tag-user-post"
  }, {
    path: "/about",
    component: _2ccd4d7a,
    name: "about"
  }, {
    path: "/desktop.ini",
    component: _2ccd4d7a,
    name: "desktop.ini"
  }, {
    path: "/faq",
    component: _2ccd4d7a,
    name: "faq"
  }, {
    path: "/faqs",
    component: _2ccd4d7a,
    name: "faqs"
  }, {
    path: "/principles",
    component: _2ccd4d7a,
    name: "principles"
  }, {
    path: "/promos",
    component: _2ccd4d7a,
    name: "promos"
  }, {
    path: "/supporters",
    component: _2ccd4d7a,
    name: "supporters"
  }, {
    path: "/team",
    component: _2ccd4d7a,
    name: "team"
  }, {
    path: "/tos",
    component: _2ccd4d7a,
    name: "tos"
  }, {
    path: "/updates",
    component: _2ccd4d7a,
    name: "updates"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
