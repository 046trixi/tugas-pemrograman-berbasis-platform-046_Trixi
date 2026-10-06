# tugas mandiri 5

## jawab tugas

### 1. Apa perbedaan SQL mentah dan ORM?
SQL mentah adalah pendekatan ketika programmer menulis perintah SQL secara langsung untuk berkomunikasi dengan database. Sedangkan ORM merupakan pendekatan yang menggunakan library atau framework untuk mengakses database melalui object dan method tanpa harus selalu menulis SQL secara langsung.

### 2. Apa kelebihan SQL mentah?
SQL mentah memiliki kelebihan berupa fleksibilitas yang tinggi. Programmer dapat membuat query sesuai kebutuhan dan dapat menggunakan berbagai fitur SQL secara langsung.

### 3. Apa kelebihan ORM?
ORM membuat kode database menjadi lebih sederhana dan mudah dibaca. ORM juga membantu programmer dalam melakukan operasi CRUD dan mengelola relasi antar tabel.

### 4. Apa risiko SQL injection?
SQL injection merupakan serangan ketika input pengguna dimasukkan ke dalam query SQL secara tidak aman sehingga dapat digunakan untuk memanipulasi perintah database. Hal tersebut dapat menyebabkan data dibaca, diubah, atau dihapus tanpa izin.

### 5. Mengapa penggunaan parameter query dapat mengurangi risiko SQL injection?
Parameter query memisahkan nilai yang diberikan pengguna dari perintah SQL. Dengan demikian, input pengguna diperlakukan sebagai data dan tidak langsung dianggap sebagai bagian dari perintah SQL.

Contohnya:

const [rows] = await db.execute(
  'SELECT * FROM jadwal WHERE id = ?',
  [id]
);

Penggunaan (?) sebagai placeholder membuat nilai id diproses sebagai parameter.

### 6. Bagaimana ORM membantu programmer dalam mengakses database?
ORM menyediakan method dan object untuk melakukan operasi database sehingga programmer tidak perlu menulis query SQL secara manual untuk setiap operasi. ORM juga membantu dalam pengelolaan data, relasi tabel, dan operasi CRUD.
