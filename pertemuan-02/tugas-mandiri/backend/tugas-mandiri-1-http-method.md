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
|1|GET|'/get'|Nama, prodi melalui query|200|Data quey berhasil diterima server|
|2|POST|'/post'|JSON nama dan prodi|200|Data JSON berhasil di terima|
|3|PUT|'/put'|JSON nama, prodi, semester|200|Data berhasil diterima|
|4|PATCH|'/patch'|JSON semester|200|Data perumahan berhasil diterima|
|5|DELETE|'/delete'|Tidak ada|200|Request DELETE berhasil diterima|

## screenshoot pengujian
## GET
![hasil pengujian get](screnshoot/get-TM1.PNG)

## POST
![hasil pengujian get](screnshoot/POST-TM1.PNG)
