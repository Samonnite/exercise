// 模拟实现call

Function.prototype.myCall = function(context) {
  // 不传入第一个参数，那么默认为 window
  var context = context || window

  // 给 context 添加一个属性
  // getValue.call(a, 'zq', '23') => a.fn = getValue
  context.fn = this

  // 将 context 后面的参数取出来
  var args = []
  for (var i = 1; i < arguments.length; i++) {
    args.push('arguments[' + i + ']')
  }
  // getValue.call(a, 'zq', '23') => a.fn('zq', '23')
  var result = eval('context.fn(' + args + ')')
  // 删除 fn
  delete context.fn
  return result
}

// 模拟实现apply
Function.prototype.myApply = function(context, arr) {
  // 不传入第一个参数，那么默认为 window
  var context = context || window

  // 给 context 添加一个属性
  // getValue.call(a, 'zq', '23') => a.fn = getValue
  context.fn = this
  var result
  // 判断是否存在第二个参数
  if (!arr) {
    result = context.fn()
  } else {
    // 将 context 后面的参数取出来
    var args = []
    for (var i = 1; i < arguments.length; i++) {
      args.push('arguments[' + i + ']')
    }
    result = eval('context.fn(' + args + ')')
  }

  // 删除 fn
  delete context.fn
  return result
}
