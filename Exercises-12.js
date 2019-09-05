function tentukanDeretGeometri(arr) {
    // you can only write your code here!
    var result = ''
    var pembagi = arr[1]/arr[0]
    temp = 1
    result =''
    for(i=arr.length-1;i>0;i--){
        temp = arr[i]/pembagi
        if(temp == arr[i-1]){
            result = true
        }
        else{
            return false
        }
    }
    return result
  }
  
  // TEST CASES
  console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
  console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
  console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
  console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
  console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false
