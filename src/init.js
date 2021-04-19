import { initState } from "./state"

export function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    const vm = this
    vm.$options = options

    // vue里面核心特性， 响应式数据原理
    // 初始化状态(将数据做一个初始化的劫持， 当我改变数据的时候应该更新视图。)
    // vue 组件中有很多状态： data props watch computed
    initState(vm)
  }
}
