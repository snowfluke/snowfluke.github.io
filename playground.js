var $ = el => document.querySelector(el)
var editor = $('#editor')
var result = $('#result')

function tab(event){
    if(event.keyCode !== 9) return
    event.preventDefault()

    let start = editor.selectionStart;
    let end = editor.selectionEnd;

    if(start == end){
        editor.value = editor.value.substring(0, start) + "\t" + editor.value.substring(end);

        editor.selectionStart =
        editor.selectionEnd = start + 1;
        return
    }

    indentSelected()
}

var sourceCode = [
    {
        materi: "1",
        namaProgram: "Program perkenalan nama",
        code:
`// Program menampilkan nama

// Deklarasi variable fadhli menggunakan let
let fadhli = 'Nurfadhli Abdurrachman Hakim'
let henky = 'Henky Fajar Syafani'

// sebuah function untuk menampilkan nama
// berdasarkan argumen yang dikirimkan
// function ini untuk sementara diabaikan terlebih dahulu
function tampilkanNama(nama){
    console.log(nama)
}

// mengeksekusi function tampilkanNama dengan argumen
// berupa variabel fadhli dan henky
tampilkanNama(fadhli)
tampilkanNama(henky)
`
    },{
        materi: "2",
        namaProgram: "Objek Kubus",
        code: `
let Kubus = {
    sisi: 10,
    tampilkanVolume(sisiMasukan = this.sisi){
        // sisiMasukan merupakan variable dinamis atau
        // biasa disebut parameter, yang nilainya sesuai
        // dengan inputan user ketika memasukan data di dalam kurung
        // sisiMasukan = this.sisi berarti parameter sisi masukan akan
        // diisi default dengan nilai sisi apabila user tidak mengirimkan
        // argumen ke dalam parameter
        this.sisi = sisiMasukan

        // Definisikan rumus
        let rumus = this.sisi * this.sisi * this.sisi

        // Tampilkan rumus
        console.log('Volume kubus dengan nilai sisi '+ this.sisi +' adalah ', rumus)
    }
}

console.log(Kubus.tampilkanVolume())
// Kode diatas akan menghasilkan output: 1000
// karena kita tidak mengirimkan argumen ke parameter
// sehingga nilai default sisi adalah 10

console.log(Kubus.tampilkanVolume(12))
// Kode diatas mengirimkan data 12 dimana di dalam
// method tampilkanVolume, data tersebut akan ditampung
// di parameter sisiMasukan
// Sehingga outputnya adalah 1728
`
    },
    {
        materi: "3a",
        namaProgram: "Operasi Aritmatika",
        code:
`class OperasiAritmatika {
    // property dari object
    constructor(a,b){
        this.angka1 = a
        this.angka2 = b
    }

    // method dari object
    tambah(){
        return this.angka1 + this.angka2
    }

    kurang(){
        // Supaya pengurangan tidak negatif
        if(this.angka1 < this.angka2){
            return this.angka2 - this.angka1
        }
        return this.angka1 - this.angka2
    }

    kali(){
        return this.angka1 * this.angka2
    }

    bagi(){
        // Supaya pembagian tidak desimal
        if(this.angka1 < this.angka2){
            return this.angka2 / this.angka1
        }
        return this.angka1 / this.angka2
    }

    sisa(){
        // Supaya hasil sisa bagi diperoleh dari bilangan terbesar di depan
        if(this.angka1 < this.angka2){
            return this.angka2 % this.angka1
        }
        return this.angka1 % this.angka2
    }
}
        
// Membuat object baru dengan a = 8, dan b = 2
const angkaBaru = new OperasiAritmatika(8,2)

console.log("Angka a: ", angkaBaru.angka1)
console.log("Angka b: ", angkaBaru.angka2)
console.log("====================")
console.log("Penjumlahan: ",angkaBaru.tambah()) // 10
console.log("Pengurangan: ",angkaBaru.kurang()) // 6
console.log("Perkalian: ",angkaBaru.kali()) // 16
console.log("Pembagian: ",angkaBaru.bagi()) // 4
console.log("Sisa bagi: ",angkaBaru.sisa()) // 0`
    },
    {
        materi: "3b",
        namaProgram: "Operasi Logika",
        code:
`class OperasiLogika {
    // property dari object
    constructor(a,b){
        // kita akan menangkap nilai a dan b
        // berupa true/false lalu memasukkannya
        // ke dalam variable air1 dan air2.
        // supaya mudah dipahami,
        // jika air1 = true artinya air bening
        // jika false artinya air kotor.
        this.air1 = a
        this.air2 = b
    }

    and(){
        // kita tidak perlu melakukan pengecekan seperti
        // if(this.air1 == true && this.air2 == true)
        // cukup dengan menuliskan variable nya (jika true)
        // dan !variablenya (jika false)

        if(this.air1 && this.air2){
            return "semua air bening"
        }
        return "salah satu air atau semua air kotor"
    }

    or(){
        if(this.air1 || this.air2){
            return "salah satu air atau semua air bening"
        }
        return "air kotor semua"
    }

    not(){
        // perhatikan tanda seru (!)
        // not merupakan operator unary
        if(!this.air1){
            // jika air 1 tidak kotor (not true)
            return "air 1 bening"
        }
        return "air 1 kotor"
    }
}

// Membuat object air dimana air1 = true, air2 = false
const air = new OperasiLogika(true, false)

console.log("Air 1: ", air.air1)
console.log("Air 2: ", air.air2)
console.log("====================")
console.log("Air 1 dan Air 2: ", air.and())
console.log("Air 1 atau Air 2: ", air.or())
console.log("Bukan Air 1: ", air.not())`
    },
    {
        materi: "3c",
        namaProgram: "Operasi Penugasan",
        code:
`class OperasiPenugasan{
    angka;
    operand;

    constructor(a,b){
        this.angka = a
        this.operand = b
    }

    samaDengan(){
        this.angka = this.operand
        // nilai angka menjadi sama dengan operand
        return this.angka
    }

    tambahSamaDengan(){
        this.angka += this.operand
        // nilai angka = angka + operand
        return this.angka
    }

    kurangSamaDengan(){
        this.angka -= this.operand
        // nilai angka = angka - operand
        return this.angka
    }

    kaliSamaDengan(){
        this.angka *= this.operand
        // nilai angka = angka * operand
        return this.angka
    }

    bagiSamaDengan(){
        this.angka /= this.operand
        // nilai angka = angka / operand
        return this.angka
    }

    sisaSamaDengan(){
        this.angka %= this.operand
        // nilai angka = angka % operand
        return this.angka
    }
}

// Membuat object angka dengan angka = 10 dan operand = 2
const angka = new OperasiPenugasan(10,2)

console.log("Angka awal: ", angka.angka)
console.log("Operand: ", angka.operand)
console.log("====================")
console.log("Angka = Operand: ", angka.samaDengan())
console.log("Angka += Operand: ", angka.tambahSamaDengan())
console.log("Angka -= Operand: ", angka.kurangSamaDengan())
console.log("Angka *= Operand: ", angka.kaliSamaDengan())
console.log("Angka /= Operand: ", angka.bagiSamaDengan())
console.log("Angka %= Operand: ", angka.sisaSamaDengan())`
    },
    {
        materi: "3d",
        namaProgram: "Operasi Perbandingan",
        code:
`class OperasiPerbandingan{
    constructor(a,b){
        this.angka1 = a
        this.angka2 = b
    }

    sama(){
        // Perhatikan simbolnya
        if(this.angka1 == this.angka2){
            return "angka1 sama dengan angka2"
        }

        return "angka1 tidak sama dengan angka2"
    }

    lebih(){
        if(this.angka1 > this.angka2){
            return "angka1 lebih dari angka2"
        }

        return "angka1 tidak lebih dari angka2"
    }

    lebihSama(){
        if(this.angka1 >= this.angka2){
            return "angka1 sama dengan atau lebih dari angka2"
        }

        return "angka1 tidak sama atau tidak lebih dari angka2"
    }

    kurang(){
        if(this.angka1 < this.angka2){
            return "angka1 kurang dari angka2"
        }

        return "angka1 tidak kurang dari angka2"
    }

    kurangSama(){
        if(this.angka1 <= this.angka2){
            return "angka1 sama dengan atau kurang dari angka2"
        }

        return "angka1 tidak sama atau kurang dari angka2"
    }

    tidakSama(){
        if(this.angka1 != this.angka2){
            return "angka1 tidak sama dengan angka2"
        }

        return "angka1 sama dengan angka2"
    }
}

// Membuat object angkaBaru dengan a = 20 dan b = 5
const angkaBaru = new OperasiPerbandingan(20, 5)

console.log("Angka 1: ",angkaBaru.angka1)
console.log("Angka 2: ",angkaBaru.angka2)
console.log("====================")
console.log(angkaBaru.sama())
console.log(angkaBaru.lebih())
console.log(angkaBaru.lebihSama())
console.log(angkaBaru.kurang())
console.log(angkaBaru.kurangSama())
console.log(angkaBaru.tidakSama())`
    },
    {
        materi: "3e",
        namaProgram: "Operator Unary",
        code: 
`class OperatorUnary{
    constructor(a){
        this.nilaiAwal = a
    }

    inc(){
        this.nilaiAwal++
        return
    }

    dec(){
        this.nilaiAwal--
        return
    }
}

// Membuat object skor dengan a = 5
const skor = new OperatorUnary(5)

console.log("Nilai awal: " + skor.nilaiAwal)
skor.inc()
console.log("Setelah di increment: "+ skor.nilaiAwal)
skor.inc()
console.log("Setelah di increment lagi: "+ skor.nilaiAwal)
skor.dec()
console.log("Setelah di decrement: "+ skor.nilaiAwal)`
    },
    {
        materi: "4a",
        namaProgram: "Perilaku Tipe Data Number",
        code:
`// Operasi aritmatika number
class Test{
    main() {

        let angka1 = 7
        let angka2 = 3
        let string1 = 'cortana'
        let objek1 = {nama: 'sasuke'}
        let array1 = ['mobil', 'motor']

        console.log('Perkalian angka*angka: ', angka1*angka2 )
        // Operasi simbol -, *, / dan % dibawah akan menghasilkan NaN
        // Karena operator tersebut khusus untuk angka
        console.log('Perkalian angka*string: ', angka1*string1 )
        console.log('Perkalian angka*array: ', angka1*array1 )
        console.log('Perkalian angka*object: ', angka1*objek1 )

    }
}

const testCase = new Test()
testCase.main()
`
    },
    {
        materi: "4b",
        namaProgram: "Konkatinasi",
        code:
`// Operator konkatinasi
class Test{
    main() {

        let string1 = 'cortana'
        let angka1 = 7
        let objek1 = {nama: 'sasuke'}
        let array1 = ['mobil', 'motor']
        let boolean1 = true

        console.log('Konkatinasi string+string: ', string1+string1 )

        // Operasi simbol + pada semua operator akan menjadi sebuah string
        console.log('Konkatinasi string+angka: ', string1+angka1 )

        // untuk array akan dipisahkan dengan ',' tiap elemennya
        console.log('Konkatinasi string+array: ', string1+array1 )

        // Untuk boolean, yaitu stringnya (bukan angka 1 atau 0)
        console.log('Konkatinasi string+boolean: ', string1+boolean1 )
        
        // Untuk object, akan di ubah menjadi string [object Object]
        console.log('Konkatinasi string+object: ', string1+objek1 )

    }
}

const testCase2 = new Test()
testCase2.main()
`
    },
    {
        materi: "4c",
        namaProgram: "Konkatinasi Template Literal",
        code:
`class Salam{
    halo(){
        // Penggabungan dengan menggunakan template literal
        // yaitu petik (\`) backtick
        // kemudian mengakses variable di dalam \${}

        let nama = 'Tsukishima'
        let tinggi = 190

        let salam = \`Halo \${nama}, tinggimu adalah \${tinggi}cm\`
        
        console.log(salam)
    }
}

const tsukishima = new Salam()
tsukishima.halo()
`
    },
    {
        materi: '5a',
        namaProgram: "Parameter dan Arguments" ,
        code:
`function tangkapBuah(buah1){
    console.log(\`Buah yang jatuh ditangkap: \${buah1}\`)
    let buahJatuh = [...arguments].join(', ')
    // arguments merupakan bentuk array
    // Diatas digunakan Spread Syntax (...) untuk memecah
    // isi arguments ke dalam array baru lalu kita
    // gunakan method join(',') untuk
    // menggabungkan array dengan koma menjadi satu string

    console.log(\`Seluruh buah yang jatuh: \${buahJatuh}\`)
}

tangkapBuah("apel","durian","manggis","karet")
`
    },
    {
        materi: "5b",
        namaProgram: "Arrow Function",
        code:
`// Penulisan pertama
// Langsung menuliskan parameter (jika ada) dalam kurung lalu diikuti
// dengan tanda => dan kurung kurawal
// Apabila kode dalam blok program lebih dari satu baris
// harus menuliskan kurung kurawal dan return (opsional)
const salam = () => {
    let halo = \`Halo!\` //baris pertama
    return halo //baris kedua
}
console.log(salam())

// Penulisan kedua
// apabila satu parameter, kurung () tidak perlu
// apabila kode dalam { } hanya satu baris maka tanpa kurung { }
// Otomatis return tanpa keyword return
const salam2 = nama => \`Halo, \${nama}\`
console.log(salam2("awal"))

// Penulisan ketiga
// apabila lebih dari satu parameter
// maka wajib dikurung
const salam3 = (nama,waktu) => \`Selamat \${waktu}, \${nama}!\`
console.log(salam3("Rafiq", "Malam"))

`
    },
    {
        materi: '5c',
        namaProgram: "Input Interrupt",
        code:
`
// Membaca inputan dan memasukkanya ke variable nama
let nama = prompt("Siapa nama kamu? ")

console.log(\`Nama kamu adalah \${nama}!\`)

// Cobalah bereksperimen
`
    },
    {
        materi: '6a',
        namaProgram: "Percabangan If",
        code:
`// Contoh penggunaan if/if-else/if-else-if
class UtsPbo{
    constructor(nama, nilaiUtsPbo){
        this.nama = nama
        this.nilai = nilaiUtsPbo
    }

    // Hanya ada satu if, jika kondisi tidak terpenuhi maka
    // Kode di dalamnya akan diabaikan
    cek1(){
        if(this.nilai > 85){
            // Jika kondisi terpenuhi
            console.log(\`\${this.nama}, Kamu mendapat nilai A\`)
        }
    }

    cek2(){
        if(this.nilai > 85){
            // Jika terpenuhi
            console.log(\`\${this.nama}, Kamu mendapat nilai A\`)
        }else{
            // Jika tidak terpenuhi
            console.log(\`\${this.nama}, Kamu tidak mendapat nilai A\`)
        }
    }

    cek3(){
        if(this.nilai > 85){
            // Jika terpenuhi
            console.log(\`\${this.nama}, Kamu mendapat nilai A\`)

            // Jika tidak terpenuhi lakukan pengecekan kembali
        }else if (this.nilai > 75){
            // Jika pengecekan kedua terpenuhi
            console.log(\`\${this.nama}, Kamu mendapat nilai B\`)
        }else {
            // jika tidak terpenuhi
            console.log(\`\${this.nama}, Kamu tidak mendapat nilai A maupun B\`)
        }
    }
}

const Ani = new UtsPbo("Ani", 70)
Ani.cek1()
Ani.cek2()
Ani.cek3()

`
    },
    {
        materi: "6b",
        namaProgram: "Percabangan Switch Case",
        code:
`class UtsPbo{
    constructor(nama, nilaiUtsPbo){
        this.nama = nama
        this.nilai = nilaiUtsPbo
    }

    cek(){
        let nilai = this.nilai

    // Perhatikan dan analisis kode switch dengan teliti
    // Switch() hanya menerima ekspresi, kemudian ekspresi
    // di evaluasi menggunakn case :
    // dan break untuk keluar dari switch
    // default sama saja dengan else

        switch(nilai){
            case nilai > 85:
                console.log(\`\${this.nama}, Kamu mendapat nilai A\`)
                break;
            case nilai > 75:
                console.log(\`\${this.nama}, Kamu mendapat nilai B\`)
                break;
            case nilai > 60:
                console.log(\`\${this.nama}, Kamu mendapat nilai C\`)
                break;
            default:
                console.log(\`\${this.nama}, Kamu mendapat nilai D\`)
                break;
        }
    }

}

const Ani = new UtsPbo("Ani", 70)
Ani.cek()
`
    },
    {
        materi: "6c",
        namaProgram: "Perulangan For",
        code:
`
class Perulangan{
    main(){
        for(let a = 1; a <=10; a++){
            console.log(\`Saya berjanji akan mengerjakan semua challenge\`)
        }
    }
}

const coba = new Perulangan()

coba.main()
// Akan tampil 10 baris

`
    },
    {
        materi: "6d",
        namaProgram: "Perulangan While & Do While",
        code:
`class Perulangan{
    contohDoWhile(){
        let itachi = 20
        let sasuke = 10

        do{
            console.log("Sasuke lebih hebat dari Itachi")
        }while(sasuke>itachi)

        // Meski itachi lebih besar nilainya dari sasuke
        // Namun "sasuke lebih hebat dari itachi" akan di tampilkan sekali
    }

    contohWhile(){
        let itachi = 20
        let sasuke = 10
        
        while(sasuke>itachi){
            console.log("Sasuke lebih hebat dari Itachi")
        }

        // Sasuke lebih hebat dari itachi tidak akan ditampilkan ke layar
    }

    contohWhileLangsung(){
        let escanor = 10
        let batas = 20
        
    	console.log("=======================================")
        console.log(\`Kekuatan escanor: \${escanor}\`)
    	console.log("=======================================")

        // selama nilai escanor kurang dari nilai batas

        while (escanor < batas){
            console.log(\`Kekuatan escanor bertambah menjadi \${escanor}\`)

            escanor++ 
            
            // Tambah kekuatan escanor setiap perulangan
            // sampai escanor melebihi nilai batas, maka perulangan berhenti
        }

        console.log(\`Kekuatan Escanor sekarang: \${escanor}\`)

    }
}

const coba = new Perulangan()

coba.contohDoWhile()
coba.contohWhile()
coba.contohWhileLangsung()
`
    },
    {
        materi: "6e",
        namaProgram: "Program Restoran",
        code:
`// PROGRAM RESTORAN

class Restoran{
    nama
    menu
    totalBayar

    constructor(nama){
        this.nama = nama
        this.totalBayar = 0
        
        this.menu =
    		[
        		{
            		makanan: "ayam bakar",
            		harga: 10_000
        		},
        		{
            		makanan: "nasi bakar",
            		harga: 12_000
        		}
    		
    		]
    }

    welcome(){
        console.log(\`Selamat datang di restoran \${this.nama}\`)
        this.tampilkanMenu()
    }

    tampilkanMenu(){
    	console.log("=======================================")
        for(let i = 0; i <= this.menu.length-1; i++){
            console.log(\`\${i}. \${this.menu[i].makanan} - Rp. \${this.menu[i].harga}\`)
        }

        this.berikanPilihan()
    }

    berikanPilihan(){
    	console.log("=======================================")
        let pilihan = prompt(\`Apa yang ingin anda pesan? \`)
		console.log("=======================================")
		
        if(this.menu[pilihan]){
            this.totalBayar += this.menu[pilihan].harga
            console.log(\`Terima kasih telah memesan \${this.menu[pilihan].makanan}\`)
            console.log(\`Harga pesanan adalah Rp. \${this.menu[pilihan].harga}\`)
            console.log("=======================================")

            let pesanLagi = prompt(\`Apakah anda ingin memesan makanan lagi? (y/n) \`)
            
            if(pesanLagi == "y") return this.tampilkanMenu()
            return this.total()
        }

        console.log("Mohon berikan pesanan yang masuk akal!" )
        this.berikanPilihan()
    }

    total(){
        console.log(\`Terima kasih telah makan di restoran \${this.nama}\`)
        console.log(\`Silahkan membayar Rp. \${this.totalBayar}\`)
        console.log("=======================================")
        console.log(\`Terima kasih\`)
        return
    }

}

const alelResto = new Restoran("Awal")
alelResto.welcome()

`
    }
]

function bersihkan(){
    editor.value = ""
    bersihkanKonsol()
}

function bersihkanKonsol(){
    result.value = ""
}

function jalankan(){
    bersihkanKonsol()
    window.scrollBy(0, 456)
    let dummyCommand = editor.value.replaceAll("console.log","dummyLog")

    try {
        (new Function(dummyCommand))();
    } catch (error) {
        result.value = error;
    }
}

function dummyLog(...cmd){
    setTimeout(() => {
        result.value += `${cmd.join(" ")}
`}, 1000)
}

function insertFor(){
    let cmd = 
`for(let i = 0; i <= 10; i++ ){

}`
    insert(cmd)

}

function insertFn(){
    let cmd = 
`function namaFungsi(){

}`
    insert(cmd)
}

function insertIf(){
    let cmd = 
`if( ){

}else{

}`

    insert(cmd)
}

function insertClass(){
    let cmd = 
`class NamaKelas{
    
    constructor( ){

    }

    method(){

    }

}`
    insert(cmd)
}

function insertLog(){
    let cmd = 
`console.log(i)`
    insert(cmd)
}

function bracket(id){
    let bracket = ["()","[]","{}","//",'""']
    insert(bracket[id])
}

function insert(el){
    let start = editor.selectionStart;
    let end = editor.selectionEnd;

    editor.value = editor.value.substring(0, start) +
el + editor.value.substring(end);

  editor.selectionStart =
    editor.selectionEnd = start + 1;
}

function indentSelected(){
    let start = editor.selectionStart
    let end = editor.selectionEnd
    let lineCount = editor.value.substring(start, end).split('\n').length
    let newIndent = editor.value.substring(start, end).split('\n').map(el => '\t'+el).join('\n')
    
    editor.value = editor.value.substring(0, start) + newIndent + editor.value.substring(end)

    editor.selectionStart = start
    editor.selectionEnd = end+lineCount

}

function undoIndent(){
    let start = editor.selectionStart
    let end = editor.selectionEnd
    let lineCount = editor.value.substring(start, end).split('\n').length
    let newIndent = editor.value.substring(start, end).split('\n').map(el => (el.substring(0,1) == '\t') ? el.substring(1,el.length) : el).join('\n')

        
    editor.value = editor.value.substring(0, start) + newIndent + editor.value.substring(end)

    editor.selectionStart = start
    editor.selectionEnd = end+lineCount
}

function selectAll(){
    let start = editor.selectionStart = 0
    let end = editor.selectionEnd = editor.value.length
    editor.select()
    editor.setSelectionRange(start,end)
}

function copy(){
    let start = editor.selectionStart
    let end = editor.selectionEnd

    if (start == end) return

    editor.select()
    editor.setSelectionRange(start,end)

    document.execCommand("copy")
    alert("Kode tersalin")
}

function getCode(codeMaterial){
    if(codeMaterial == "") return
    bersihkan()
    editor.value = sourceCode[codeMaterial].code
}

