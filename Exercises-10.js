function perkalianUnik(arr) {
    // you can only write your code here!
    // var temp = 1; //Variabel untuk tampungan data perkalian berupa number, bukan string.
    var result =[] //Array kosong yang nantinya akan digunakan untuk mengisi hasil perkalian uniknya.
    for(i=0; i<arr.length; i++){ //Perulangan pertama untuk mengakses index dari array yang diinputkan.
        temp = 1//Digunakan untuk mengembalikan nilai awal tampungan agar tidak menumpuk
        for(j=0; j< arr.length; j++){//Perulangan kedua untuk mengakses index dari array
            if(j !== i){// kondisi jika index j tidak sama dengan index i
                // console.log(temp)
                temp = temp * arr[j] //maka tampungan akan dikalikan dengan angka pada index j
            }
        }
        result.push(temp)//hasilnya di push ke array baru
    }
    return result //membalikkan nilai hasil yang sudah disatukan di dalam array baru
}
  
  // TEST CASES
  console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
//   console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
//   console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
//   console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
//   console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]