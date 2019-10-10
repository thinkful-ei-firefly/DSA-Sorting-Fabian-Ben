const input = [16, 83, 32, 56, 69, 11, 43, 25]
//lower = 1
//highest = 9



//ouput = [1, 2, 3, 5, 6, 6, 8, 9]


function bucketSort(arr, lower, highest){
  const tempArr = []
  tempArr.length = highest;
  tempArr[0] = [lower];
  tempArr[tempArr.length-1]=[highest]
  for (let i=0; i<arr.length; i++){
    if (arr[i]!==lower && arr[i]!==highest){
      const index = arr[i] - lower
      if (tempArr[index])
        tempArr[index] = [...tempArr[index], arr[i]]
      else
        tempArr[index] = [arr[i]]
    }
  }

  var myNewArray = tempArr.reduce(function(prev, curr) {
    return prev.concat(curr);
  });

  return myNewArray;
}

console.log(bucketSort(input, 1, 9));
