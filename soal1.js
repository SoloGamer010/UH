// Soal 1 (Membuat function dengan return string)
// Buatlah function dengan nama cetakFunction()

/*

        Tulis code funtion disini

*/

// console.log(cetakFunction());

// Perlu di perhatikan cetakFunction() itu adalah function, akan tetapi belum ada funtionnya, silahkan anda buat terlebih dahulu. Outputnya nanti :

// "Halo nama saya <nama_kamu>"

// Jawab no. 1 :

function cetakFunction(a){
    return `Halo nama saya ` + a
}

console.log(cetakFunction("Haikal"));

// Soal 2 (Membuat function dengan nama myFunction)

function myFunction(a,b){
    return a + b;
}


let angka1 = 20;
let angka2 = 7;
let output = myFunction(angka1, angka2);
console.log(output)

// Soal 3 (Mengubah dalam arrow function)
// Terdapat sebuah function sebagai berikut :

const hello = () =>{
    return a = "Hallo";

}
let our = hello()
console.log("soal no 3");
console.log(our);


// Ubahlah function tsb kedalam bentuk ES6 (Arrow function)

// Soal 4 (Memanggil key dalam sebuah object)
// Terdapat object sebagai berikut :

// buatlah pemanggilan objek dengan key tertentu untuk menghasilkan output seperti ini :
// "Indonesia"

let obj = {
    nama  : "John",
    umur : 22,
    bahasa : "Indonesia",
    showBahasa : function(){
       console.log(`${this.bahasa}`) 
    }
}

obj.showBahasa();

// Soal 5 (Mengubah array menjadi object)
// Ubah array di bawah ini enjadi object dengan properti nama, jenis kelamin, hobi dan tahun lahir (var arrayDaftarPeserta harus di oleh menjadi object)

// Note : boleh dehan cara di index saja dari array ke objectnya
let arrayy = ["john Doe", "laki-laki", "baca buku", 1992]


let object = {
    nama : arrayy[0],
    kelamin : arrayy[1],
    hobi : arrayy[2],
    tahun : arrayy[3],
}

console.log(arrayy);

// Soal 6 (Membuat sebuah array of object dan melakukan filter)

// Anda diberikan data-data buah seperti di bawah ini

const buah = [{
    nama : "Nanas",
    warna : "Kuning",
    ada_bijinya : "Tidak",
    harga : 9000,
},
{
    nama : "Jeruk",
    warna : "Oranye",
    ada_bijinya : "Ada",
    harga : 9000,
},
{
    nama : "Semamgka",
    warna : "Hijau dan merah",
    ada_bijinya : "Ada",
    harga : 10000,
},
{
    nama : "Pisang",
    warna : "Kuning",
    ada_bijinya : "Tidak",
    harga : 9000,
}]

const cekBiji = buah.filter((buah) => buah.ada_bijinya == 'Tidak');

// var array1 = ["Jeruk", "Semangka", "Nanas", "Pisang"]

// console.log(array1.sort())
console.log(cekBiji.sort())