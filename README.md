# TypeScript
TypeScript dikembangkan oleh microsoft, bahasa pemograman yang dibangun menggunakan JavaScript (super-set dari JavaScript). TypeScript menambahkan syntax ke JavaScript untuk mendukung integrasi yang lebih erat dengan editor untuk menemukan kesalahan lebih awal di editor. Kode TypeScript akan di koversi ke JavaScript, yang berjalan di browser, nodejs ataupun deno.
TypeScript memahami JavaScript dan menggunakan type inference untuk memberikan perkakas hebat tanpa kode tambahan.

## Cara kerja TypeScript

`INPUT (TS) -> Proses (TSC) -> Output (JS)`

## System yang digunakan
Node v18.20.2
NPM v1.1.12
TSC v5.6.2

## Installation TypeScript

### Install Local
```bash
npm install typescript --save-dev
```

### Install Global (digunakan)
```bash
npm install -g typescript
```

### Check versi TypeScript
`tsc -v`

### Cara jalankan 
```
tsc path/to/file.ts --outDir path/to/output/folder
```

contoh 
```
tsc .\src\hello.ts --outDir .\dist\
```

lalu run dengan nodejs

```
node .\dist\hello.js
```

### Init TypeScript
`tsc --init`

Dengan perintah diatas akan membuat sebuah file `tsconfig.json`, dimana file itu untuk configurasi typescript.

Disini akan diberikan contoh cara mengatur folder typescript dan hasil outputnya dimana dengan cara cari bagian key `outDir` dan `rootDir` dan isi sesuai value dibawah ini.
```
    {
        "compilerOptions": {
            "outDir": "./dist", // Folder output
            "rootDir": "./src", // Folder TypeScript
        }
    }
```

## List Learn
1. [Basic Type](docs/data-type.md)
