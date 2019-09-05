function pasanganTerbesar(num) {
    // you can only write your code here!
    var blok = []
    var temp =''
    var numStr = String(num)

    for(i=0;i <= numStr.length;i++){
        if(temp.length == 2 ){
            blok.push (Number(temp))
            temp = ''
            i -=2
        }
        else{
            temp += numStr[i]
        }
    }
    blok.sort(function(a,b){return b-a})

    return blok[0]
}

  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99