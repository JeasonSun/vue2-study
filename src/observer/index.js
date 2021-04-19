import { defineProperty } from '../util'
import { arrayMethods } from './array'

class Observer {
  constructor (value) {
    // Object.defineProperty(value, '__ob__', {
    //   enumerable: false,
    //   configurable: false,
    //   value: this
    // })
    defineProperty(value, '__ob__', this)

    // 使用defineProperty重新定义属性
    if (Array.isArray(value)) {
      // 函数劫持、切片编程
      value.__proto__ = arrayMethods
      this.observeArray(value)
    } else {
      this.walk(value)
    }
  }

  walk (data) {
    let keys = Object.keys(data)
    keys.forEach(key => {
      defineReactive(data, key, data[key])
    })
  }

  observeArray (value) {
    value.forEach(item => {
      observe(item) // 观测数组中的对象类型
    })
  }
}

function defineReactive (data, key, value) {
  observe(value)
  Object.defineProperty(data, key, {
    get () {
      console.log('用户获取值', key)
      return value
    },
    set (newValue) {
      if (newValue === value) return
      observe(newValue)
      console.log('用户设置值', key, value)
      value = newValue
    }
  })
}

export function observe (data) {
  if (typeof data !== 'object' || data === null) {
    return
  }

  if (data.__ob__) {
    return
  }

  return new Observer(data)
}
