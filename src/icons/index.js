import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'// svg component

// register globally
Vue.component('svg-icon', SvgIcon)

const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)

// console.log('icons--11', req)
// console.log('icons--12', require)
// console.log('icons--13', requireAll)
// console.log('icons--14', requireAll(req))