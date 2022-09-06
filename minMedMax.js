// const { template } = require('@babel/core')

function minMedMax(n1, n2, n3) {

  let result = {min:"", mid:"", max:""}
  let arr = [n1,n2,n3]
  
  let min = n1
  let max = n1
  let mid = n1

  for (let index = 0; index < arr.length; index++) {
    if (arr[index] < min) {
      min = arr[index]
    }
  }

  for (let index = 0; index < arr.length; index++) {
    if (arr[index] > max) {
      max = arr[index]
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

  return console.log(result) 
}

// module.exports = minMedMax


minMedMax(85, 30, 1)      // { min: 1, mid: 30, max: 85 }
minMedMax(10, 0, 20)      // { min: 0, mid: 10, max: 20 }
minMedMax(-5, 0, 10)      // { min: -5, mid: 0, max: 10 }
minMedMax(5, 1, 1)        // { min: 1, mid: 5, max: 5 }
minMedMax(-1, -8, 0)      // { min: -8, mid: -1, max: 0 }