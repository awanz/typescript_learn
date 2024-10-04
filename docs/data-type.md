# Basic Type

## Type data primitif
Tipe data primitif adalah

- string
merupakan tipe data teks seperti `Hello, world`
- number
merupakan tipe data angka seperti `15`
- boolean
merupakan tipe data yang memiliki nilai `true` dan `false`
- array
- any
merupakan sebuah tipe data yang dapat diisi dengan nilai apapun, bisa angka, huruf, boolean dan lainnya.
- Union Type
merupakan sebuah tipe data yang memiliki lebih dari 1 tipe
- Interfaces
merupakan sebuah tipe data untuk mendefinisikan struktur object, interface dapat di extend, dapat di Declaration Merging
- Type
merupakan sebuah tipe data yang flexible yang dapat mendefinisikan tipe apa saja, type tidak dapat extend tetapi dapat menggunakan operator union (|) atau intersection (&), dan tidak dapat Declaration Merging


## noImplicitAny
pada tsconfig kita bisa mengatur supaya noImplicitAny dimana ketika kita membuat sebuah variable any akan terdeteksi error

## Inferensi Tipe Data