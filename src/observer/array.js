let oldArrayProtoMethods = Array.prototype

export let arrayMethods = Object.create(oldArrayProtoMethods)

let methods = ['push', 'pop', 'shift', 'unshift', 'reverse', 'sort', 'splice']

methods.forEach(method => {
  arrayMethods[method] = function (...args) {
    console.log('数组方法被调用了')
    const result = oldArrayProtoMethods[method].apply(this, args)
    const ob = this.__ob__
    let inserted
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args
        break
      case 'splice': // vue.$set原理
        inserted = args.slice(2)
        break;
      default:
        break
    }
    if(inserted) ob.observeArray(inserted)
    return result
  }
})
