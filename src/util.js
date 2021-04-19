export function proxy (vm, data, key) {
  Object.defineProperty(vm, key, {
    get () {
      return vm[data][key]
    },
    set (newValue) {
      vm[data][key] = newValue
    }
  })
}

export function defineProperty (obj, key, value) {
  Object.defineProperty(obj, key, {
    enumerable: false,
    configurable: false,
    value
  })
}
