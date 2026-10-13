# TUGAS PENDAHULUAN

## Soal 1 — Bandingkan Bootstrap dan Tailwind.
Bootstrap dan Tailwind CSS memiliki pendekatan yang berbeda dalam membuat tampilan website. Pada Bootstrap, pembuatan kartu menggunakan class seperti card, card-body, card-title, dan card-text, sedangkan tombol menggunakan class seperti btn, btn-primary, dan btn-secondary. Sementara itu, Tailwind CSS menggunakan utility class yang digabungkan sesuai kebutuhan, misalnya bg-white, p-6, rounded-lg, dan shadow-md untuk kartu, serta px-4, py-2, bg-blue-500, text-white, dan rounded untuk tombol. Menurut saya, Bootstrap lebih mudah digunakan oleh pemula karena menyediakan komponen yang sudah siap digunakan, sehingga kita tidak perlu menggabungkan banyak class untuk membuat tampilan dasar.

## Soal 2 — Rancang satu kartu biodata dengan dua pendekatan.
<div align="center">

FOTO

Wulidati Trixiana

NIM: 2024520046

 Lihat Profil GitHub 

</div>
Kartu biodata yang dibuat berisi foto, nama, NIM, dan satu tombol. Pada pendekatan komponen (Bootstrap), struktur HTML dapat dibuat seperti:
<div class="card">
  <img src="foto.jpg" class="card-img-top">
  <div class="card-body">
    <h5 class="card-title">Wulidati Trixiana</h5>
    <p class="card-text">NIM: 230411100</p>
    <a href="#" class="btn btn-primary">Lihat Profil</a>
  </div>
</div>
Pada pendekatan utility (Tailwind CSS), strukturnya dapat dibuat seperti berikut:
<div class="bg-white rounded-lg shadow-md p-5">
  <img src="foto.jpg" class="w-24 h-24 rounded-full mx-auto">
  <h2 class="text-xl font-bold text-center mt-3">Wulidati Trixiana</h2>
  <p class="text-gray-600 text-center">NIM: 2024520046</p>
  <button class="bg-blue-500 text-white px-4 py-2 rounded mt-3">
    Lihat Profil
  </button>
</div>
Pada versi Tailwind tersebut terdapat 16 class utility yang digunakan untuk mengatur ukuran, warna, jarak, bentuk, dan posisi elemen. Versi Tailwind lebih mudah diubah warnanya karena warna dapat langsung diganti melalui utility class seperti bg-blue-500 tanpa perlu membuat atau mengubah aturan CSS khusus.

## Soal 3 — Amati isi token. Buka jwt.io.
jumlah bagian token: 3 bagian yang dipisahkan tanda titik, yaitu Header, Payload, dan Signature.
Data pada payload:
```json
{
 	 "sub": "1234567890",
   "name": "John Doe",
 	 "iat": 1516239022
}
```
Data yang terlihat adalah `sub` (ID pengguna), `name` (nama pengguna), dan `iat` (waktu token diterbitkan).
Mengapa password tidak boleh disimpan di payload: Payload JWT hanya di-encode dengan Base64URL, bukan dienkripsi, sehingga siapa pun yang memegang token bisa membacanya (misalnya lewat jwt.io). Signature hanya menjamin isi token tidak diubah, bukan menyembunyikannya, jadi password yang ada di payload akan bocor.

## Soal 4 — Analogi gerbang kampus. 
Ketika memasuki gerbang UNIRA, petugas memeriksa identitas seperti KTM untuk memastikan bahwa orang tersebut benar-benar mahasiswa atau memiliki identitas yang sah. Pemeriksaan ini merupakan contoh authentication, yaitu proses untuk memastikan identitas seseorang. Setelah berada di dalam kampus, ketika ingin masuk ke ruang server laboratorium, dilakukan pemeriksaan apakah orang tersebut memiliki hak atau izin untuk masuk ke ruangan tersebut. Pemeriksaan ini merupakan contoh authorization, yaitu proses menentukan hak akses seseorang. Contohnya, seorang mahasiswa berhasil menunjukkan KTM dan dinyatakan sebagai mahasiswa UNIRA (authentication berhasil), tetapi tetap tidak diperbolehkan masuk ke ruang server karena hanya teknisi atau admin yang memiliki izin (authorization ditolak).

## Soal 5 — Peran di aplikasi nyata.
Saya memilih aplikasi SIAKAD sebagai contoh. Dalam SIAKAD terdapat beberapa peran, yaitu mahasiswa, dosen, dan admin. Salah satu fitur yang hanya boleh digunakan oleh peran tertentu adalah mengelola data mahasiswa, yang hanya dapat dilakukan oleh admin. Jika pengguna belum login dan mencoba mengakses fitur yang membutuhkan login, sistem memberikan respons 401 Unauthorized karena identitas pengguna belum terverifikasi. Sedangkan jika pengguna sudah login tetapi tidak memiliki izin, misalnya mahasiswa mencoba mengelola data mahasiswa, sistem memberikan respons 403 Forbidden karena identitasnya sudah diketahui tetapi pengguna tersebut tidak memiliki hak akses ke fitur tersebut.

Keterangan: Kartu biodata terdiri dari foto di bagian atas, kemudian nama dan NIM di bagian tengah, serta tombol “Lihat Profil” di bagian bawah. Sketsa ini dapat digunakan sebagai rancangan sebelum dibuat menggunakan Bootstrap dan Tailwind CSS.
