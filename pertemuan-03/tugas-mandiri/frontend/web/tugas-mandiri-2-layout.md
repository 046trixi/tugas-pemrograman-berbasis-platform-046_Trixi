

# Laporan Tugas Mandiri 2
## Menyusun Tata Letak dengan Class Utility

### 1. Tujuan
Tujuan tugas ini adalah membuat halaman Profil Mahasiswa yang responsif menggunakan Tailwind CSS. Halaman terdiri dari navbar, hero, tiga kartu informasi, dan footer.

### 2. Class Utility yang Digunakan

| Bagian | Class Utility | Fungsi |
|---:|---:|---|
| Navbar | `flex items-center justify-between` | Menyusun logo dan menu navigasi dalam satu baris serta mengatur posisinya. |
| Navbar | `gap-3 sm:gap-6` | Mengatur jarak antar menu dan memperbesar jarak pada layar yang lebih lebar. |
| Hero | `grid grid-cols-1 md:grid-cols-2` | Menyusun hero menjadi satu kolom pada layar kecil dan dua kolom mulai ukuran medium. |
| Hero | `items-center gap-8` | Menyejajarkan konten secara vertikal dan memberi jarak antarbagian. |
| Tombol hero | `hover:bg-blue-50` | Mengubah warna latar tombol ketika kursor diarahkan ke tombol. |
| Kontainer kartu | `grid grid-cols-1 gap-5 md:grid-cols-3` | Menampilkan kartu dalam satu kolom pada layar kecil dan tiga kolom pada layar medium ke atas. |
| Kartu | `rounded-2xl bg-white p-6 shadow-sm` | Memberi sudut membulat, latar putih, ruang dalam, dan bayangan ringan. |
| Kartu | `transition hover:-translate-y-1 hover:shadow-lg` | Membuat kartu sedikit terangkat dan bayangannya lebih jelas ketika kursor berada di atasnya. |
| Footer | `bg-slate-900 px-4 py-6 text-center` | Memberi latar gelap, mengatur ruang dalam, dan meratakan teks ke tengah. |

### 3. Hubungan Class Utility dengan Tampilan

Class utility digunakan untuk mengatur tampilan secara langsung melalui atribut `class` pada elemen HTML. Contohnya, `grid-cols-1` membuat elemen tersusun dalam satu kolom, sedangkan `md:grid-cols-3` mengubahnya menjadi tiga kolom mulai breakpoint medium. Class `gap-5` memberi jarak antarkartu agar tampilannya lebih rapi.

Class dengan prefiks `hover:` digunakan untuk mengubah tampilan ketika kursor berada di atas elemen. Pada halaman ini, class `hover:bg-blue-50` mengubah warna tombol hero, sedangkan `hover:-translate-y-1` membuat kartu sedikit terangkat. Dengan demikian, tampilan halaman dapat diatur tanpa menulis CSS sendiri.

### 4. Bagian yang Mudah dan Sulit Disusun

Menurut saya, bagian yang paling mudah disusun menggunakan class utility adalah kumpulan kartu karena class `grid`, `grid-cols-1`, `md:grid-cols-3`, dan `gap-5` dapat langsung mengatur jumlah kolom serta jarak antarkartu. Bagian yang agak sulit dibaca adalah hero karena memiliki banyak class untuk mengatur warna, ukuran teks, jarak, dan responsivitas sekaligus. Jika class pada satu elemen terlalu banyak, kode HTML menjadi panjang sehingga perlu disusun dengan rapi agar lebih mudah dipahami.

### 5. Pengujian Responsivitas

Halaman diuji pada tampilan laptop dan layar dengan lebar 360 px. Pada layar kecil, bagian hero dan kumpulan kartu ditampilkan dalam satu kolom. Pada layar yang lebih lebar, hero berubah menjadi dua kolom dan tiga kartu ditampilkan berjajar dalam tiga kolom.

Class `hover:` juga diuji dengan mengarahkan kursor ke tombol hero dan kartu. Perubahan warna dan bayangan terlihat ketika kursor berada di atas elemen tersebut.

Tangkapan layar pada tampilan laptop dan lebar layar 360 px dilampirkan sebagai bukti pengujian.
