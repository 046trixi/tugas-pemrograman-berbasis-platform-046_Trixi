# Tugas Mandiri 1 — Mengenal HTTP Method dan Endpoint

## 1. GET

URL:
https://httpbin.org/get?nama=Trixi&prodi=Informatika

Status: 200 OK

Hasil:
Server berhasil menerima request GET dan mengembalikan
query parameter yang dikirim.

## 2. POST

URL:
https://httpbin.org/post

Data:
{
  "nama": "Trixi",
  "prodi": "Informatika"
}

Status: 200 OK

Hasil:
Server berhasil menerima data JSON.

## 3. PUT

URL: 
https://httpbin.org/put

Data:
{
  "nama": "Trixi",
  "prodi": "Informatika",
  "semester": 5
}

Status: 200 OK

Hasil: 
Server berhasil menerima data

## PATCH

URL:
https://httpbin.org/patch

Data:
{
  "semester": 4
}

Status: 200 OK

Hasil:
Server berhasil menerima perubahan data

## DELETE

URL:
https://httpbin.org/delete

Status: 200 OK

Hasil:
Server berhasil menerima Request Delete

## TABLE HASIL PENGUJIAN
|NO|METHOD|ENDPOINT|DATA YANG DI KIRIM|STATUS|HASIL|
|---:|---|---|---|---:|---|
|1|GET|'/GET'|Nama, prodi melalui query|200|Data quey berhasil diterima server|
## screenshoot pengujian
## GET
https://github.com/046trixi/tugas-pemrograman-berbasis-platform-046_Trixi/blob/main/pertemuan-02/tugas-mandiri/screenshoot/get-TM1.PNG

## POST
https://github.com/046trixi/tugas-pemrograman-berbasis-platform-046_Trixi/blob/main/pertemuan-02/tugas-mandiri/screenshoot/POST-TM1.PNG
