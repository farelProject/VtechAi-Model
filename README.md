# VtechAi

**VtechAi** adalah chatbot cerdas berbasis model Terbaru, dirancang oleh Farel Alfreza. Dapat digunakan untuk membuat chatbot dalam aplikasi Node.js Anda.

---

## 🚀 Instalasi

```bash
npm install vtech-ai
```

---

## 📦 Penggunaan Dasar

```js
const VtechAi = require("vtech-ai");

VtechAi({ message: "Apa kabar?", user: "Dion" })
  .then(console.log)
  .catch(console.error);
```

---

## ⚙️ Opsi Parameter

Fungsi `VtechAi` menerima sebuah objek dengan parameter:

| Parameter | Tipe   | Wajib | Deskripsi |
|-----------|--------|-------|-----------|
| `message` | String | ✅    | Pesan yang ingin Anda kirim ke AI |
| `user`    | String | ❌    | Nama pengguna untuk disapa oleh AI (default: "User") |
| `file`    | Object | ❌    | Data file untuk dikirim ke AI (opsional) |

### Struktur file (opsional):

```js
{
  fileName: "nama.pdf",
  data: "base64string",
  mimeType: "application/pdf",
  isImage: false
}
```

---

## 🔁 Contoh Lengkap

```js
const VtechAi = require("vtech-ai");

async function main() {
  try {
    const response = await VtechAi({
      message: "Ceritakan tentang developer kamu",
      user: "Yoga"
    });

    console.log("Balasan AI:", response);
  } catch (err) {
    console.error("Terjadi kesalahan:", err.message);
  }
}

main();
```

---

## 📜 Tentang AI

- Nama: **VtechAi**
- Developer: **Farel Alfreza**
- Deskripsi: AI cerdas yang dapat menyapa pengguna dan menjawab dengan konteks personal.

---

## 📌 Catatan Keamanan

Gunakan Dengan Bijak

---

# Dokumentasi

Gambar

![Petunjuk](https://pomf2.lain.la/f/ozqkxnmi.png "Gambar 1")
![Petunjuk](https://pomf2.lain.la/f/bpdixaf.png "Gambar 1")
![Petunjuk](https://pomf2.lain.la/f/5as6fkx.png "Gambar 1")


## 📄 Lisensi

MIT © Farel Alfreza
