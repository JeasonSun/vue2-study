import { observe } from './observer/index'
import { proxy } from './util'

export function initState (vm) {
  const opts = vm.$options
  if (opts.props) {
    initProps(vm)
  }
  if (opts.methods) {
    initMethods(vm)
  }
  if (opts.data) {
    initData(vm)
  }
  if (opts.computed) {
    initComputed(vm)
  }
  if (opts.watch) {
    initWatch(vm)
  }
}

function initProps (vm) {}

function initMethods () {}



function initData (vm) {
  let data = vm.$options.data
  vm._data = data = typeof data === 'function' ? data.call(vm) : data
  // console.log(data);
  // 数据的劫持方案， 对象Object.defineProperty
  // 数组 单独处理

  for (let key in data) {
    proxy(vm, '_data', key)
  }
  observe(data)
}

function initComputed () {}

function initWatch () {}
