
//pindah array ke dalam index
const angka = [0,0,0,0]
const pemisah = angka.join(' - ')
let hasil = randomNumber(angka) //angka random sebelum tambah 1
let soal = hasil.join(' - ')

// console.log(hasil);
let jawabanBanding = jawaban(hasil,1) //sesudah tambah 1
let hasilAkhir = jawabanBanding.join(' - ')
// console.log(jawabanBanding);
//assign angka jadi 0000 dengan ' - '
let inputAngka = document.getElementsByClassName('angka')[0].children[0]
inputAngka.innerText = pemisah


//ketika sudah di click tombol,maka assign 0000 jadi angka random sebelum tambah1
let kirim = document.getElementById('kirim')
kirim.addEventListener('click', gameStart)

let flag = false

function gameStart() {
    reset()
    inputAngka.innerText = soal
    setTimeout(function(){
        inputAngka.innerText = hasilAkhir
        if(flag === false){
            alert('anda salah')
        }
    }, 3000)
}
    
let submitButton = document.getElementById('kumpulJawaban')
submitButton.addEventListener('click', function(){
    let bandingkan = document.getElementById("angka").value
    console.log(bandingkan);
    let arrayBanding = jawabanBanding.join('')
    
    if(bandingkan == arrayBanding){
        alert('anda betul')
        flag = true
    }
    // console.log(bandingkan, '===', jawabanBanding);
})

function reset(){
    inputAngka.innerText = pemisah
    hasil = randomNumber(angka)
    soal = hasil.join(' - ')
    jawabanBanding = jawaban(hasil,1)
    hasilAkhir = jawabanBanding.join(' - ')
    flag = false
}
//return angka random
function randomNumber(angka){
    let nampung = []
    for(let a = 0; a < angka.length; a++){
        nampung.push(Math.floor(Math.random()*10))
    }
    return nampung
}
//jawaban
function jawaban(input, level){
    let output = []
    for(let a = 0; a < input.length; a++){
        if(input[a] + level > 9){
            output.push(0)
        }else{
            output.push(input[a]+ level)
        }
    }
    return output
}