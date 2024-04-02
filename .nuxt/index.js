import Vue from 'vue'
import Vuex from 'vuex'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from '../layouts/error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_bootstrapvue_60831ada from 'nuxt_plugin_bootstrapvue_60831ada' // Source: ./bootstrap-vue.js (mode: 'all')
import nuxt_plugin_cookieuniversalnuxt_379e0153 from 'nuxt_plugin_cookieuniversalnuxt_379e0153' // Source: ./cookie-universal-nuxt.js (mode: 'all')
import nuxt_plugin_axios_743b17ab from 'nuxt_plugin_axios_743b17ab' // Source: ./axios.js (mode: 'all')
import nuxt_plugin_pluginscsrf12d3de92_439a5a5b from 'nuxt_plugin_pluginscsrf12d3de92_439a5a5b' // Source: ./plugins.csrf.12d3de92.js (mode: 'all')
import nuxt_plugin_fontawesome_0d4d3ead from 'nuxt_plugin_fontawesome_0d4d3ead' // Source: ./fontawesome.js (mode: 'all')
import nuxt_plugin_pluginserver_56a31e9e from 'nuxt_plugin_pluginserver_56a31e9e' // Source: ./color-mode/plugin.server.js (mode: 'server')
import nuxt_plugin_pluginclient_6ef4ff29 from 'nuxt_plugin_pluginclient_6ef4ff29' // Source: ./color-mode/plugin.client.js (mode: 'client')
import nuxt_plugin_axios_397e53b5 from 'nuxt_plugin_axios_397e53b5' // Source: ../plugins/axios.js (mode: 'all')
import nuxt_plugin_chain_a6413cec from 'nuxt_plugin_chain_a6413cec' // Source: ../plugins/chain.js (mode: 'all')
import nuxt_plugin_eventbusclient_f002a812 from 'nuxt_plugin_eventbusclient_f002a812' // Source: ../plugins/event-bus.client.js (mode: 'client')
import nuxt_plugin_globalmixins_180da8ef from 'nuxt_plugin_globalmixins_180da8ef' // Source: ../plugins/global-mixins.js (mode: 'all')
import nuxt_plugin_mavoneditorclient_5c02638b from 'nuxt_plugin_mavoneditorclient_5c02638b' // Source: ../plugins/mavon-editor.client.js (mode: 'client')
import nuxt_plugin_nftmarketplace_e4d52dd8 from 'nuxt_plugin_nftmarketplace_e4d52dd8' // Source: ../plugins/nftmarketplace.js (mode: 'all')
import nuxt_plugin_scotapi_634187c1 from 'nuxt_plugin_scotapi_634187c1' // Source: ../plugins/scot-api.js (mode: 'all')
import nuxt_plugin_sidechain_d520443e from 'nuxt_plugin_sidechain_d520443e' // Source: ../plugins/sidechain.js (mode: 'all')
import nuxt_plugin_vuelazyload_d7e169bc from 'nuxt_plugin_vuelazyload_d7e169bc' // Source: ../plugins/vue-lazyload.js (mode: 'all')
import nuxt_plugin_vuenotification_42068071 from 'nuxt_plugin_vuenotification_42068071' // Source: ../plugins/vue-notification.js (mode: 'all')
import nuxt_plugin_vueplyrclient_4d1fc1ce from 'nuxt_plugin_vueplyrclient_4d1fc1ce' // Source: ../plugins/vue-plyr.client.js (mode: 'client')
import nuxt_plugin_vuetimeago_0767caf6 from 'nuxt_plugin_vuetimeago_0767caf6' // Source: ../plugins/vue-timeago.js (mode: 'all')
import nuxt_plugin_vuetimersclient_8ee030f2 from 'nuxt_plugin_vuetimersclient_8ee030f2' // Source: ../plugins/vue-timers.client.js (mode: 'client')
import nuxt_plugin_vuelidate_45aab49a from 'nuxt_plugin_vuelidate_45aab49a' // Source: ../plugins/vuelidate.js (mode: 'all')
import nuxt_plugin_auth_b73d1fb6 from 'nuxt_plugin_auth_b73d1fb6' // Source: ./auth.js (mode: 'all')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt
    if (process.client && !globalNuxt && typeof window !== 'undefined') {
      return window.$nuxt
    }
    return globalNuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

const originalRegisterModule = Vuex.Store.prototype.registerModule

function registerModule (path, rawModule, options = {}) {
  const preserveState = process.client && (
    Array.isArray(path)
      ? !!path.reduce((namespacedState, path) => namespacedState && namespacedState[path], this.state)
      : path in this.state
  )
  return originalRegisterModule.call(this, path, rawModule, { preserveState, ...options })
}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config)

  const store = createStore(ssrContext)
  // Add this.$router into store actions/mutations
  store.$router = router

  // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
  store.registerModule = registerModule

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: function() {
    const description = `${config.APP_TITLE} is a social media platform where everyone gets paid for creating and curating content. It leverages a robust digital points system, called ${config.TOKEN}, that supports real value for digital rewards through market price discovery and liquidity.`;

    const head = {
      titleTemplate: (titleChunk) => {
        return titleChunk ? `${titleChunk} - ${config.APP_TITLE}` : `${config.APP_TITLE}`;
      },
      htmlAttrs: {
        lang: 'en' },

      meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: description },
      { hid: 'og-type', property: 'og:type', content: 'website' },
      { hid: 'og-title', property: 'og:title', content: config.APP_TITLE },
      { hid: 'og-description', property: 'og:description', content: description },
      { hid: 'og-image', property: 'og:image', content: `${config.APP_DOMAIN}/cover.png` },
      { hid: 'twitter-title', name: 'twitter:title', content: config.APP_TITLE },
      { hid: 'twitter-card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter-description', name: 'twitter:description', content: description },
      { hid: 'twitter-image', name: 'twitter:image', content: `${config.APP_DOMAIN}/cover.png` }],

      link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }] };

    return head;
  },

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_bootstrapvue_60831ada === 'function') {
    await nuxt_plugin_bootstrapvue_60831ada(app.context, inject)
  }

  if (typeof nuxt_plugin_cookieuniversalnuxt_379e0153 === 'function') {
    await nuxt_plugin_cookieuniversalnuxt_379e0153(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_743b17ab === 'function') {
    await nuxt_plugin_axios_743b17ab(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginscsrf12d3de92_439a5a5b === 'function') {
    await nuxt_plugin_pluginscsrf12d3de92_439a5a5b(app.context, inject)
  }

  if (typeof nuxt_plugin_fontawesome_0d4d3ead === 'function') {
    await nuxt_plugin_fontawesome_0d4d3ead(app.context, inject)
  }

  if (process.server && typeof nuxt_plugin_pluginserver_56a31e9e === 'function') {
    await nuxt_plugin_pluginserver_56a31e9e(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_pluginclient_6ef4ff29 === 'function') {
    await nuxt_plugin_pluginclient_6ef4ff29(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_397e53b5 === 'function') {
    await nuxt_plugin_axios_397e53b5(app.context, inject)
  }

  if (typeof nuxt_plugin_chain_a6413cec === 'function') {
    await nuxt_plugin_chain_a6413cec(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_eventbusclient_f002a812 === 'function') {
    await nuxt_plugin_eventbusclient_f002a812(app.context, inject)
  }

  if (typeof nuxt_plugin_globalmixins_180da8ef === 'function') {
    await nuxt_plugin_globalmixins_180da8ef(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_mavoneditorclient_5c02638b === 'function') {
    await nuxt_plugin_mavoneditorclient_5c02638b(app.context, inject)
  }

  if (typeof nuxt_plugin_nftmarketplace_e4d52dd8 === 'function') {
    await nuxt_plugin_nftmarketplace_e4d52dd8(app.context, inject)
  }

  if (typeof nuxt_plugin_scotapi_634187c1 === 'function') {
    await nuxt_plugin_scotapi_634187c1(app.context, inject)
  }

  if (typeof nuxt_plugin_sidechain_d520443e === 'function') {
    await nuxt_plugin_sidechain_d520443e(app.context, inject)
  }

  if (typeof nuxt_plugin_vuelazyload_d7e169bc === 'function') {
    await nuxt_plugin_vuelazyload_d7e169bc(app.context, inject)
  }

  if (typeof nuxt_plugin_vuenotification_42068071 === 'function') {
    await nuxt_plugin_vuenotification_42068071(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vueplyrclient_4d1fc1ce === 'function') {
    await nuxt_plugin_vueplyrclient_4d1fc1ce(app.context, inject)
  }

  if (typeof nuxt_plugin_vuetimeago_0767caf6 === 'function') {
    await nuxt_plugin_vuetimeago_0767caf6(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vuetimersclient_8ee030f2 === 'function') {
    await nuxt_plugin_vuetimersclient_8ee030f2(app.context, inject)
  }

  if (typeof nuxt_plugin_vuelidate_45aab49a === 'function') {
    await nuxt_plugin_vuelidate_45aab49a(app.context, inject)
  }

  if (typeof nuxt_plugin_auth_b73d1fb6 === 'function') {
    await nuxt_plugin_auth_b73d1fb6(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (process.client) {
      const { route } = router.resolve(app.context.route.fullPath)
      if (!route.matched.length) {
        return resolve()
      }
    }
    router.replace(app.context.route.fullPath, resolve, (err) => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err)
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if (process.server && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath
        }
        app.context.route = await getRouteData(to)
        app.context.params = to.params || {}
        app.context.query = to.query || {}
        unregister()
        resolve()
      })
    })
  })

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
