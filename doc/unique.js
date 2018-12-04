function unique(arr) {
  var res = []
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < res.length; j++) {
      if (arr[i] === res[j]) {
        break
      }
    }
    // 如果arr[i]是唯一的，那么执行完循环，j等于resLen
    if (j === res.length) {
      res.push(arr[i])
    }
  }
  return res
}

function unique(arr) {
  return Array.from(new Set(arr))
}

function unique(arr) {
  return [...new set(arr)]
}

var unique = arr => [...new set(arr)]
