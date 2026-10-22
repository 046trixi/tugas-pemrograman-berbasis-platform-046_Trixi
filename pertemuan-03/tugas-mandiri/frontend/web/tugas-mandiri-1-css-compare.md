
# Perbandingan Component-Based dan Utility-First

## 1. Jumlah Baris CSS dan Class Utility

| Aspek | Component-Based | Utility-First |
|---:|---:|---|
| Pendekatan | CSS sendiri di dalam tag `<style>` | Tailwind CSS melalui CDN |
| Jumlah baris CSS | 13 baris CSS tidak kosong | 0 baris CSS buatan sendiri |
| Jumlah class utility | Tidak menggunakan class utility Tailwind | 57 penggunaan class utility |
| Pengaturan tampilan | Menggunakan class seperti `.card` dan `.btn` | Menggunakan class seperti `p-6`, `rounded-xl`, dan `bg-blue-600` |
| Responsivitas | Menggunakan media query | Menggunakan utility responsif jika diperlukan |

Jumlah baris CSS dihitung dari baris CSS yang tidak kosong di dalam tag `<style>`. Jumlah class utility dihitung berdasarkan semua penggunaan class Tailwind pada elemen HTML, termasuk class yang sama jika digunakan kembali.

## 2. Perbandingan Waktu Pengerjaan

Menurut percobaan saya, pendekatan component-based membutuhkan waktu untuk membuat aturan CSS terlebih dahulu, kemudian menerapkan class pada elemen HTML. Setelah class komponen dibuat, class tersebut dapat digunakan kembali pada elemen lain dengan tampilan yang sama.

Pada pendekatan utility-first, saya dapat mengatur tampilan langsung melalui class pada elemen HTML. Cara ini cukup praktis untuk membuat desain sederhana karena tidak perlu menulis aturan CSS sendiri. Namun, saya perlu mencari dan menyusun class yang sesuai dengan tampilan yang diinginkan.

Secara keseluruhan, utility-first terasa praktis untuk membuat tampilan awal, sedangkan component-based lebih terstruktur ketika aturan CSS akan digunakan berulang kali. Waktu pengerjaan sebenarnya dapat berbeda sesuai pengalaman dan kebiasaan masing-masing.

## 3. Perbandingan Kemudahan Perubahan Tema

Pada versi component-based, saya dapat mengubah warna tombol melalui aturan `.btn` dan warna kartu melalui aturan `.card`. Jika beberapa elemen memakai class yang sama, perubahan pada aturan CSS dapat diterapkan ke seluruh elemen tersebut.

Pada versi utility-first, saya dapat mengganti class warna, misalnya `bg-blue-600` menjadi `bg-green-600`. Cara ini cukup cepat untuk perubahan sederhana, tetapi jika banyak elemen menggunakan warna yang sama, saya perlu mengubah class pada elemen-elemen terkait.

Menurut saya, component-based lebih mudah dikelola ketika banyak komponen menggunakan tema yang sama. Sementara itu, utility-first memudahkan perubahan tampilan langsung pada elemen HTML.

## 4. Pendekatan yang Dipilih untuk Proyek Akhir

Untuk halaman yang memiliki banyak komponen berulang, seperti dashboard admin, halaman data mahasiswa, dan halaman pengelolaan produk, saya memilih component-based. Alasannya, aturan CSS dapat digunakan kembali sehingga tampilan lebih konsisten dan lebih mudah dipelihara.

Untuk halaman landing page, halaman promosi, atau halaman profil sederhana, saya memilih utility-first karena proses penyusunan layout dan pengaturan tampilannya lebih praktis. Class Tailwind juga memudahkan pengaturan jarak, warna, ukuran, dan responsivitas.

Namun, pilihan tersebut tetap bergantung pada kebutuhan proyek, kompleksitas desain, dan kebiasaan tim pengembang.

## 5. Pengujian Responsivitas

Kedua halaman diuji pada tampilan laptop dan lebar layar 360 px. Pada ukuran 360 px, kartu menggunakan lebar yang menyesuaikan ruang yang tersedia sehingga tidak menimbulkan scroll horizontal.

Tangkapan layar versi component-based dan utility-first pada kedua ukuran layar disertakan sebagai bukti pengujian.

### Component-Based

[![Hasil pengujian component](../screenshoot/component.PNG)](https://raw.githubusercontent.com/046trixi/tugas-pemrograman-berbasis-platform-046_Trixi/refs/heads/main/pertemuan-03/tugas-mandiri/screenshoot/component.PNG)

### Utility-First

![Hasil pengujian utility](../screenshoot/utility.PNG)
