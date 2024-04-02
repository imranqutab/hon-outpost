import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5b407c56 = () => interopDefault(import('../pages/dashboard.vue' /* webpackChunkName: "pages/dashboard" */))
const _5223deac = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _72330df4 = () => interopDefault(import('../pages/nfts.vue' /* webpackChunkName: "pages/nfts" */))
const _b4ccb9ee = () => interopDefault(import('../pages/nfts/index.vue' /* webpackChunkName: "pages/nfts/index" */))
const _b3038a74 = () => interopDefault(import('../pages/nfts/activities.vue' /* webpackChunkName: "pages/nfts/activities" */))
const _51ee11f4 = () => interopDefault(import('../pages/nfts/admin.vue' /* webpackChunkName: "pages/nfts/admin" */))
const _069c9e3a = () => interopDefault(import('../pages/nfts/collection/index.vue' /* webpackChunkName: "pages/nfts/collection/index" */))
const _46bb518c = () => interopDefault(import('../pages/nfts/gallery/index.vue' /* webpackChunkName: "pages/nfts/gallery/index" */))
const _264a5c15 = () => interopDefault(import('../pages/nfts/market.vue' /* webpackChunkName: "pages/nfts/market" */))
const _b443750a = () => interopDefault(import('../pages/nfts/mint.vue' /* webpackChunkName: "pages/nfts/mint" */))
const _0c83da87 = () => interopDefault(import('../pages/nfts/official/index.vue' /* webpackChunkName: "pages/nfts/official/index" */))
const _c195d6c0 = () => interopDefault(import('../pages/nfts/profile.vue' /* webpackChunkName: "pages/nfts/profile" */))
const _8d4cd0fe = () => interopDefault(import('../pages/nfts/search.vue' /* webpackChunkName: "pages/nfts/search" */))
const _35968a04 = () => interopDefault(import('../pages/nfts/collection/_series.vue' /* webpackChunkName: "pages/nfts/collection/_series" */))
const _cf183c60 = () => interopDefault(import('../pages/nfts/gallery/_series.vue' /* webpackChunkName: "pages/nfts/gallery/_series" */))
const _0e3e180b = () => interopDefault(import('../pages/nfts/official/_series.vue' /* webpackChunkName: "pages/nfts/official/_series" */))
const _8df86fe6 = () => interopDefault(import('../pages/nfts/_series.vue' /* webpackChunkName: "pages/nfts/_series" */))
const _69d6086b = () => interopDefault(import('../pages/pool.vue' /* webpackChunkName: "pages/pool" */))
const _d9915aa4 = () => interopDefault(import('../pages/pool/index.vue' /* webpackChunkName: "pages/pool/index" */))
const _0d0b3806 = () => interopDefault(import('../pages/pool/add.vue' /* webpackChunkName: "pages/pool/add" */))
const _09316460 = () => interopDefault(import('../pages/pool/create.vue' /* webpackChunkName: "pages/pool/create" */))
const _5a878b33 = () => interopDefault(import('../pages/pool/pools.vue' /* webpackChunkName: "pages/pool/pools" */))
const _2974bd50 = () => interopDefault(import('../pages/pool/remove.vue' /* webpackChunkName: "pages/pool/remove" */))
const _20c526fc = () => interopDefault(import('../pages/proposals.vue' /* webpackChunkName: "pages/proposals" */))
const _c0c155e0 = () => interopDefault(import('../pages/publish.vue' /* webpackChunkName: "pages/publish" */))
const _0d466d93 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _32d7e5c1 = () => interopDefault(import('../pages/_sort/index.vue' /* webpackChunkName: "pages/_sort/index" */))
const _32eb3d6b = () => interopDefault(import('../pages/_user.vue' /* webpackChunkName: "pages/_user" */))
const _22d0c7ae = () => interopDefault(import('../pages/_user/index.vue' /* webpackChunkName: "pages/_user/index" */))
const _b4b8ca70 = () => interopDefault(import('../pages/_user/comments.vue' /* webpackChunkName: "pages/_user/comments" */))
const _a98a311e = () => interopDefault(import('../pages/_user/followers.vue' /* webpackChunkName: "pages/_user/followers" */))
const _775757ed = () => interopDefault(import('../pages/_user/following.vue' /* webpackChunkName: "pages/_user/following" */))
const _65a323e4 = () => interopDefault(import('../pages/_user/replies.vue' /* webpackChunkName: "pages/_user/replies" */))
const _d5f46d12 = () => interopDefault(import('../pages/_user/settings.vue' /* webpackChunkName: "pages/_user/settings" */))
const _bf153566 = () => interopDefault(import('../pages/_user/wallet.vue' /* webpackChunkName: "pages/_user/wallet" */))
const _ae140982 = () => interopDefault(import('../pages/_sort/_tag/index.vue' /* webpackChunkName: "pages/_sort/_tag/index" */))
const _388ac4ed = () => interopDefault(import('../pages/feed.vue' /* webpackChunkName: "pages/_user/feed" */))
const _711a26ef = () => interopDefault(import('../pages/post.vue' /* webpackChunkName: "pages/_user/_post" */))

const _6b0bb3fd = () => interopDefault(import('../pages/static.vue' /* webpackChunkName: "pages/faq" */))

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
    component: _5b407c56,
    name: "dashboard"
  }, {
    path: "/login",
    component: _5223deac,
    name: "login"
  }, {
    path: "/nfts",
    component: _72330df4,
    children: [{
      path: "",
      component: _b4ccb9ee,
      name: "nfts"
    }, {
      path: "activities",
      component: _b3038a74,
      name: "nfts-activities"
    }, {
      path: "admin",
      component: _51ee11f4,
      name: "nfts-admin"
    }, {
      path: "/@:user/collection",
      component: _069c9e3a,
      name: "user-collection"
    }, {
      path: "/@:user/gallery",
      component: _46bb518c,
      name: "user-gallery"
    }, {
      path: "market",
      component: _264a5c15,
      name: "nfts-market"
    }, {
      path: "mint",
      component: _b443750a,
      name: "nfts-mint"
    }, {
      path: "official",
      component: _0c83da87,
      name: "nfts-official"
    }, {
      path: "profile",
      component: _c195d6c0,
      name: "nfts-profile"
    }, {
      path: "search",
      component: _8d4cd0fe,
      name: "nfts-search"
    }, {
      path: "/@:user/collection/:series",
      component: _35968a04,
      name: "user-collection-series"
    }, {
      path: "/@:user/gallery/:series",
      component: _cf183c60,
      name: "user-gallery-series"
    }, {
      path: "official/:series",
      component: _0e3e180b,
      name: "nfts-official-series"
    }, {
      path: ":series",
      component: _8df86fe6,
      name: "nfts-series"
    }]
  }, {
    path: "/pool",
    component: _69d6086b,
    children: [{
      path: "",
      component: _d9915aa4,
      name: "pool"
    }, {
      path: "add",
      component: _0d0b3806,
      name: "pool-add"
    }, {
      path: "create",
      component: _09316460,
      name: "pool-create"
    }, {
      path: "pools",
      component: _5a878b33,
      name: "pool-pools"
    }, {
      path: "remove",
      component: _2974bd50,
      name: "pool-remove"
    }]
  }, {
    path: "/proposals/:id?",
    component: _20c526fc,
    name: "proposals"
  }, {
    path: "/publish",
    component: _c0c155e0,
    name: "publish"
  }, {
    path: "/",
    component: _0d466d93,
    name: "index"
  }, {
    path: "/:sort(hot|trending|promoted|payout|payout_comments|muted|created|curated)",
    component: _32d7e5c1,
    name: "sort"
  }, {
    path: "/@:user",
    component: _32eb3d6b,
    children: [{
      path: "",
      component: _22d0c7ae,
      name: "user"
    }, {
      path: "comments",
      component: _b4b8ca70,
      name: "user-comments"
    }, {
      path: "followers",
      component: _a98a311e,
      name: "user-followers"
    }, {
      path: "following",
      component: _775757ed,
      name: "user-following"
    }, {
      path: "replies",
      component: _65a323e4,
      name: "user-replies"
    }, {
      path: "settings",
      component: _d5f46d12,
      name: "user-settings"
    }, {
      path: "wallet",
      component: _bf153566,
      name: "user-wallet"
    }]
  }, {
    path: "/:sort(hot|trending|promoted|payout|payout_comments|muted|created|curated)/:tag",
    component: _ae140982,
    name: "sort-tag"
  }, {
    path: "/@:user/feed",
    component: _388ac4ed,
    name: "user-feed"
  }, {
    path: "/@:user/:post",
    component: _711a26ef,
    name: "user-post"
  }, {
    path: "/:tag/@:user/:post",
    redirect: {"name":"user-post"},
    name: "tag-user-post"
  }, {
    path: "/faq",
    component: _6b0bb3fd,
    name: "faq"
  }, {
    path: "/tos",
    component: _6b0bb3fd,
    name: "tos"
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
