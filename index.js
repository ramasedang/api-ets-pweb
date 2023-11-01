const express = require('express');
const fs = require('fs');

const jsonResponse = [
    {
        "title": "Atomic Habits: Perubahan Kecil yang Memberikan Hasil Luar Biasa",
        "penulis": "James Clear",
        "penerbit": "Gramedia Pustaka Utama",
        "harga": 90000,
        "gambar": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1535115320l/40121378._SY475_.jpg",
        "tgl_terbit": "15 September 2019",
        "jum_halaman": 356,
        "isbn": "SCOOPG184449",
        "quotes": "All big things come from small beginnings"
    },
    {
        "title": "The Psychology of Money: Timeless Lessons on Wealth, Greed, and Happiness",
        "penulis": "Morgan Housel",
        "penerbit": "Harriman House",
        "harga": 100000,
        "gambar": "https://cdn.gramedia.com/uploads/items/psychology_of_money.jpg",
        "tgl_terbit": "8 Juli 2022",
        "jum_halaman": 256,
        "isbn": "9780857197689",
        "quotes": "Getting money is one thing. Keeping it is another."
    },
    {
        "title": "The Alpha Girl's Guide",
        "penulis": "Henry Manampiring",
        "penerbit": "GagasMedia",
        "harga": 80000,
        "gambar": "https://cdn.gramedia.com/uploads/items/THE_ALPHA_GIRLS_GUIDE.jpg",
        "tgl_terbit": "30 Januari 2020",
        "jum_halaman": 280,
        "isbn": "9789797809546",
        "quotes": "Cara kamu bangkitlah yang menjadikanmu seorang Alpha"
    },
    {
        "title": "Laut Bercerita",
        "penulis": "Leila S. Chudori",
        "penerbit": "Kepustakaan Populer Gramedia",
        "harga": 80000,
        "gambar": "https://s3-ap-southeast-1.amazonaws.com/ebook-previews/40678/143505/1.jpg",
        "tgl_terbit": "25 Oktober 2017",
        "jum_halaman": 394,
        "isbn": "SCOOPG143505",
        "quotes": "Pengkhianat ada di mana-mana, bahkan di depan hidung kita, Laut"
    },
    {
        "title": "Sunset Bersama Rosie",
        "penulis": "Tere Liye",
        "penerbit": "PENERBIT SABAK GRIP",
        "harga": 80000,
        "gambar": "https://cdn.gramedia.com/uploads/items/img20210420_14424010.jpg",
        "tgl_terbit": "15 April 2021",
        "jum_halaman": 412,
        "isbn": "9786239607463",
        "quotes": "Pagi, berarti satu hari yang melelahkan telah terlampaui lagi"
    }
]

const app = express();
const port = process.env.PORT || 3000;

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
});

app.use('/', async (req, res) => {
    try {
        return res.status(200).json(jsonResponse);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
