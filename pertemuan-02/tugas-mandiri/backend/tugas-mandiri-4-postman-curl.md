# tugas mandiri 4

## 3-5 jawaban
Opsi -s (silent/quiet) menyembunyikan semua output kemajuan download, status bar, maupun pesan error bawaan curl. Opsi -i (include) menyertakan header respons HTTP (seperti status code 200 OK, Content-Type, dan Server) di bagian atas sebelum isi bodi dokumen. Perbedaan hasil kedua perintah tersebut terletak pada tampilan informasi yang dimunculkan: curl -s hanya akan menampilkan isi bodi tanpa progress meter, sedangkan curl -i akan menampilkan header HTTP yang disusul oleh isi bodi beserta progress meter. Gunakan opsi -s saat menjalankan perintah di dalam skrip/otomasi agar output tetap bersih, dan gunakan opsi -i saat proses debugging atau ingin memeriksa respons header dari server API/web.
