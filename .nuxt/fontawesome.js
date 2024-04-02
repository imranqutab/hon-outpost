import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import {
  FontAwesomeLayers,
  FontAwesomeLayersText,
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'

import {
  faUsers as freeFasFaUsers,
  faLink as freeFasFaLink,
  faMapMarkedAlt as freeFasFaMapMarkedAlt,
  faCheck as freeFasFaCheck,
  faArrowRight as freeFasFaArrowRight,
  faPlus as freeFasFaPlus,
  faHeart as freeFasFaHeart,
  faHeartBroken as freeFasFaHeartBroken,
  faTimes as freeFasFaTimes,
  faUndo as freeFasFaUndo,
  faRedo as freeFasFaRedo,
  faPencilAlt as freeFasFaPencilAlt,
  faCircleNotch as freeFasFaCircleNotch,
  faSortAmountDown as freeFasFaSortAmountDown,
  faCommentAlt as freeFasFaCommentAlt,
  faRetweet as freeFasFaRetweet,
  faRedoAlt as freeFasFaRedoAlt,
  faEllipsisH as freeFasFaEllipsisH,
  faAngleUp as freeFasFaAngleUp,
  faAngleDown as freeFasFaAngleDown,
  faAngleRight as freeFasFaAngleRight,
  faAngleLeft as freeFasFaAngleLeft,
  faVideo as freeFasFaVideo,
  faMusic as freeFasFaMusic,
  faTags as freeFasFaTags,
  faList as freeFasFaList,
  faShoppingCart as freeFasFaShoppingCart,
  faCartPlus as freeFasFaCartPlus,
  faCartArrowDown as freeFasFaCartArrowDown,
  faChevronUp as freeFasFaChevronUp,
  faChevronDown as freeFasFaChevronDown,
  faShoppingBasket as freeFasFaShoppingBasket,
  faExclamationCircle as freeFasFaExclamationCircle,
  faSync as freeFasFaSync,
  faPercent as freeFasFaPercent,
  faLongArrowAltUp as freeFasFaLongArrowAltUp,
  faLongArrowAltDown as freeFasFaLongArrowAltDown,
  faInfoCircle as freeFasFaInfoCircle,
  faBars as freeFasFaBars,
  faExternalLinkAlt as freeFasFaExternalLinkAlt,
  faEye as freeFasFaEye
} from '@fortawesome/free-solid-svg-icons'

import {
  faMoon as freeFarFaMoon,
  faSun as freeFarFaSun,
  faTimesCircle as freeFarFaTimesCircle,
  faComments as freeFarFaComments,
  faCommentAlt as freeFarFaCommentAlt
} from '@fortawesome/free-regular-svg-icons'

library.add(
  freeFasFaUsers,
  freeFasFaLink,
  freeFasFaMapMarkedAlt,
  freeFasFaCheck,
  freeFasFaArrowRight,
  freeFasFaPlus,
  freeFasFaHeart,
  freeFasFaHeartBroken,
  freeFasFaTimes,
  freeFasFaUndo,
  freeFasFaRedo,
  freeFasFaPencilAlt,
  freeFasFaCircleNotch,
  freeFasFaSortAmountDown,
  freeFasFaCommentAlt,
  freeFasFaRetweet,
  freeFasFaRedoAlt,
  freeFasFaEllipsisH,
  freeFasFaAngleUp,
  freeFasFaAngleDown,
  freeFasFaAngleRight,
  freeFasFaAngleLeft,
  freeFasFaVideo,
  freeFasFaMusic,
  freeFasFaTags,
  freeFasFaList,
  freeFasFaShoppingCart,
  freeFasFaCartPlus,
  freeFasFaCartArrowDown,
  freeFasFaChevronUp,
  freeFasFaChevronDown,
  freeFasFaShoppingBasket,
  freeFasFaExclamationCircle,
  freeFasFaSync,
  freeFasFaPercent,
  freeFasFaLongArrowAltUp,
  freeFasFaLongArrowAltDown,
  freeFasFaInfoCircle,
  freeFasFaBars,
  freeFasFaExternalLinkAlt,
  freeFasFaEye,
  freeFarFaMoon,
  freeFarFaSun,
  freeFarFaTimesCircle,
  freeFarFaComments,
  freeFarFaCommentAlt
)

config.autoAddCss = false

Vue.component('faIcon', FontAwesomeIcon)
Vue.component('faLayers', FontAwesomeLayers)
Vue.component('faLayersText', FontAwesomeLayersText)
