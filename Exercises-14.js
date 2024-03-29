function mengelompokkanAngka(arr) {
    // you can only write your code here!
    var result = []
    var blok1 = []
    var blok2 = []
    var blok3 = []
    for(i=0;i<arr.length; i++){
        var temp = ''
        if(arr[i] % 3 ==0){
            temp += arr[i]
            blok3.push(Number(temp))
        }
        else if(arr[i] % 2 == 0){
            temp += arr[i]
            blok1.push(Number(temp))
        }
        else if(arr[i] % 2 != 0){
            temp += arr[i]
            blok2.push(Number(temp))
        }
    }
    result.push(blok1,blok2,blok3)
    return result
}
  
  // TEST CASES
  console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
  console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
  console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
  console.log(mengelompokkanAngka([])); // [ [], [], [] ]