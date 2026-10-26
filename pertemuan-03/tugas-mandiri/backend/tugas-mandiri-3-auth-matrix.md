# Tugas Mandiri 3 — Menganalisis Authentication dan Authorization

## 1. Peran Pengguna

Proyek yang dipilih adalah Elibrary (Perpustakaan Digital), dengan tiga peran pengguna:

1. **Anggota:** Mencari buku, melakukan peminjaman, memperpanjang peminjaman, dan mengunduh e-book yang diizinkan.
2. **Pustakawan:** Mengelola katalog buku, memproses peminjaman dan pengembalian, serta mengelola antrean reservasi.
3. **Pimpinan:** Melihat statistik perpustakaan dan laporan untuk membantu pengambilan keputusan.

## 2. Matriks Hak Akses

| Fitur | Anggota | Pustakawan | Pimpinan | Endpoint |
|---|:---:|:---:|:---:|---|
| Melihat katalog buku | ✅ | ✅ | ✅ | `GET /buku` |
| Menambahkan buku baru | ❌ | ✅ | ❌ | `POST /buku` |
| Mengubah data buku | ❌ | ✅ | ❌ | `PUT /buku/:id` |
| Melakukan peminjaman buku | ✅ | ✅ | ❌ | `POST /peminjaman` |
| Memproses pengembalian buku | ❌ | ✅ | ❌ | `POST /pengembalian` |
| Memperpanjang peminjaman | ✅ | ❌ | ❌ | `POST /peminjaman/:id/perpanjang` |
| Melihat antrean reservasi buku | ✅ | ✅ | ❌ | `GET /reservasi` |
| Mengunduh e-book | ✅ | ❌ | ❌ | `GET /ebook/:id/download` |
| Melihat statistik perpustakaan | ❌ | ❌ | ✅ | `GET /laporan/statistik` |

**Keterangan:** ✅ = diizinkan, ❌ = tidak diizinkan. Pengguna harus memenuhi aturan autentikasi dan otorisasi untuk mengakses endpoint yang dilindungi.

## 3. Perbedaan Kode 401 dan 403

Kode `401 Unauthorized` digunakan ketika pengguna tidak menyertakan token atau token yang diberikan tidak valid. Contohnya, pengguna mengakses `POST /peminjaman` tanpa token sehingga identitasnya belum dapat diverifikasi.

Kode `403 Forbidden` digunakan ketika pengguna sudah terautentikasi, tetapi tidak mempunyai hak akses terhadap fitur yang diminta. Contohnya, anggota yang sudah login mencoba mengakses `POST /buku` untuk menambahkan buku, padahal fitur tersebut hanya diperbolehkan bagi pustakawan.

Authentication digunakan untuk memeriksa identitas pengguna, sedangkan authorization digunakan untuk memeriksa hak akses pengguna.

## 4. Risiko Jika Hanya Menggunakan `requireAuth`

Jika endpoint `POST /buku` hanya menggunakan `requireAuth` tanpa `requireRole`, sistem hanya memeriksa apakah pengguna sudah login dan memiliki token yang valid. Akibatnya, anggota atau pimpinan yang sudah login berpotensi menambahkan buku meskipun tidak memiliki izin. Oleh karena itu, endpoint tersebut perlu menggunakan `requireRole` agar hanya pustakawan yang dapat menambahkan buku.
