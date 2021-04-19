import { initMixin } from "./init"

function Vue (options) {
  this._init(options)
}

// 写成一个个的插件进行对原型的扩展

initMixin(Vue)

export default Vue
