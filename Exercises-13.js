function targetTerdekat(arr) {
    // you can only write your code here!
    var coorX = []
    var coorO = ''
    var jarak = []

    for(i=0;i<arr.length;i++){
      if(arr[i] == 'x'){
        coorX.push(i)
      }
      else if(arr[i] == 'o'){
        coorO += i
      }
    }
    // console.log(coorX)

    for(i=0;i<coorX.length;i++){
      var hasilKurang = Math.abs(coorX[i]-coorO)
      jarak.push(hasilKurang)
    }
    // console.log(jarak)

    for(i=0;i<jarak.length;i++){
      var min = jarak[0]
      if(jarak[i]<min){
        min = jarak[i]
      }
    }
    if(coorX.length == 0){
      return 0
    }
    return min
}
  
  // TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2