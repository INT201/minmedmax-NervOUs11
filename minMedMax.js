const { template } = require('@babel/core')

function minMedMax(n1, n2, n3) {

  let result = {min:"", mid:"", max:""}
  let arr = [n1,n2,n3]
  
  let min = n2
  let max = n2
  let mid = n2

  for (let index = 0; index < arr.length; index++) {
    if (arr[index] > max) {
      max = arr[index]
    }
  }

  for (let index = 0; index < arr.length; index++) {
    if (arr[index] < min) {
      min = arr[index]
    }
  }

  for (let index = 0; index < arr.length; index++) {
    if (arr[index] < max && arr[index] > min) {
      mid = arr[index]
    }
  }

  result.min = min
  result.mid = mid
  result.max = max

  return result
}

module.exports = minMedMax

