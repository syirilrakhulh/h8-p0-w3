function dataHandling2(array){

    array.splice(1,2,"Roman Alamsyah Elsharawy","Provinsi Bandar Lampung")
    array.splice(4,1,"Pria", "SMA Internasional Metro")
    console.log(array)
    
    var bulanSplit = array[3].split("/")
    var bulan = array[3].split('/')
    switch(bulanSplit[1]){
        case '01': {console.log('Januari');break;}
        case '02': {console.log('Februari');break;}
        case '03': {console.log('Maret');break;}
        case '04': {console.log('April');break;}
        case '05': {console.log('Mei');break;}
        case '06': {console.log('Juni');break;}
        case '07': {console.log('Juli');break;}
        case '08': {console.log('Agustus');break;}
        case '09': {console.log('September');break;}
        case '10': {console.log('Oktober');break;}
        case '11': {console.log('November');break;}
        case '12': {console.log('Desember');break;}
        default : {console.log('Masukkan tanggal dengan benar');break;}
    }
    
    bulanSplit.sort(function(a,b){return b - a})
    console.log(bulanSplit)
    bulan = bulan.join('-')
    console.log(bulan)
    
    var batas = array[1].split("")
    var irisan = batas.slice(0,14)
    irisan = irisan.join("")
    console.log(irisan) 
}
    
var array = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]  
dataHandling2(array)