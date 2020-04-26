function getPilihanComputer () {
    const comp = Math.random();
    if( comp < 0.34 ) return 'gajah';
    if( comp >= 0.34 && comp < 0.67 ) return 'orang';
    return 'semut';
}

function getHasil(comp, player) {
    if( player == comp ) return 'SERI';
    if( player == 'gajah') return ( comp == 'orang') ? 'MENANG!' : 'KALAH!' ;
    if( player == 'orang') return ( comp == 'gajah') ? 'KALAH!' : 'MENANG!' ;
    if( player == 'semut') return ( comp == 'orang') ? 'KALAH!' : 'MENANG!' ;
}

// function putar() {
//     const imgComputer = document.querySelector('.img-komputer');
//     const gambar = ['gajah', 'semut', 'orang'];
//     let i = 0;
//     const waktuMulai = new Date().getTime(); 
//     setInterval (function () {
//         if ( new.Date().getTime() - waktuMulai > 1000){
//             clearInterval;
//             return;
//             // return untuk keluar dari function
//         }
    
//     // kenapa menggunakan let karena isinya akan berubah2
//     // waktunya dari 0 -1 
//         imgComputer.setAttribute('src', 'img/' + gambar [i++] + '.png');
//         if ( i == gambar.length) i = 0;
        
//         // jika i sudah sampai jumlah gambar maka ia akan kembali ke 0 lagi 
//         // gambar untuk indeks tertentu (agar gambar balik lagi menu utama)
//     }, 100)
//     // setiap 0.1 detik maka ia akan ganti2 gambarnya
//     // fungsi untuk melakukan pengulangan selama waktu tertentu
// }

function putar() {
    const imgComputer = document.querySelector('.img-komputer');
    const gambar = ['gajah', 'semut', 'orang'];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(function () {
        if ( new Date().getTime() - waktuMulai > 1000) {
            clearInterval;
            return;
        }
        imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.png');
        if( i == gambar.length) i = 0;
    }, 100)
}

const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function(pil) {
// untuk nodelist yang ada dalam pilihan
// query selector all berfungsi untuk mengambil semua dalam halaman, jika 1 maka 1
// inikan akan menghasilkan nodelist bukan html collection
    pil.addEventListener('click', function() {
        const pilihanComputer = getPilihanComputer();
        const pilihanPlayer = pil.className;
        // untuk mengambil kelas
        const hasil = getHasil(pilihanComputer, pilihanPlayer);

        putar();

        setTimeout(function() {
        const imgComputer = document.querySelector('.img-komputer');
        // ini untuk mengubah gambar pada htmlnya otomatis
        imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');
        // stelah itu kita gambar dengan manipulasi atributnya.
        // src = adalah atribut , img/ = dengan gambar pilihan sesuai dengan computer
        // png adalah ekstensinya

        const info = document.querySelector('.info');
        info.innerHTML = hasil;
        }, 1000)

        // console.log('comp : '+ pilihanComputer); 
        // console.log('player : '+ pilihanPlayer);
        // console.log('hasil : ' + hasil); 

        const imgComputer = document.querySelector('.img-komputer');
        // ini untuk mengubah gambar pada htmlnya otomatis
        imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');
        // stelah itu kita gambar dengan manipulasi atributnya.
        // src = adalah atribut , img/ = dengan gambar pilihan sesuai dengan computer
        // png adalah ekstensinya

        const info = document.querySelector('.info');
        info.innerHTML = hasil;
    });
});




// const pGajah = document.querySelector('.gajah');
// pGajah.addEventListener('click', function(){
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pGajah.className;
//      // untuk mengambil kelas
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);
//     console.log('comp : '+ pilihanComputer); 
//     console.log('player : '+ pilihanPlayer);
//     console.log('hasil : ' + hasil); 

//     const imgComputer = document.querySelector('.img-komputer');
//     // ini untuk mengubah gambar pada htmlnya otomatis
//     imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');
//     // stelah itu kita gambar dengan manipulasi atributnya.
//     // src = adalah atribut , img/ = dengan gambar pilihan sesuai dengan computer
//     // png adalah ekstensinya

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });

// // lanjut ke menit 23

// const pOrang = document.querySelector('.orang');
// pOrang.addEventListener('click', function(){
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pGajah.className;
//      // untuk mengambil kelas
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);
//     console.log('comp : '+ pilihanComputer); 
//     console.log('player : '+ pilihanPlayer);
//     console.log('hasil : ' + hasil); 

//     const imgComputer = document.querySelector('.img-komputer');
//     // ini untuk mengubah gambar pada htmlnya otomatis
//     imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');
//     // stelah itu kita gambar dengan manipulasi atributnya.
//     // src = adalah atribut , img/ = dengan gambar pilihan sesuai dengan computer
//     // png adalah ekstensinya

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });

// const pSemut = document.querySelector('.semut');
// pSemut.addEventListener('click', function(){
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pGajah.className;
//      // untuk mengambil kelas
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);
//     console.log('comp : '+ pilihanComputer); 
//     console.log('player : '+ pilihanPlayer);
//     console.log('hasil : ' + hasil); 

//     const imgComputer = document.querySelector('.img-komputer');
//     // ini untuk mengubah gambar pada htmlnya otomatis
//     imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');
//     // stelah itu kita gambar dengan manipulasi atributnya.
//     // src = adalah atribut , img/ = dengan gambar pilihan sesuai dengan computer
//     // png adalah ekstensinya

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });

// terlalu banyak fungsi if sehingga perlu adanya pengulangan

// lanjut ke menit 35.