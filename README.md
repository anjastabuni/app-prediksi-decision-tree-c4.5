# app-prediksi-decision-tree-c4.5

Belajar membuat sistem prediksi kelulusan mahasiswa menggunakan algoritma Decision Tree C4.5 dengan teknologi **MERN Stack** (MongoDB, Express.js, React.js, Node.js).

## 🚀 Fitur
- ⏳CRUD Mahasiswa (Tambah, Tampilkan, Edit, Hapus)
- ⏳Prediksi kelulusan mahasiswa menggunakan algoritma **Decision Tree C4.5**
- ✅API berbasis **Express.js** dan database **MongoDB**
- ⏳Frontend menggunakan **React.js**

---

## 🧪 Testing API (Menggunakan Thunder Client / Postman)

### **1️⃣ Tambah Mahasiswa (POST)**
- **URL:** `http://localhost:5000/api/students`
- **Body (JSON):**
```json
{
  "name": "John Doe",
  "gender": "Laki-laki",
  "schoolOrigin": "SMA Negeri 1 Jayapura",
  "schoolRegion": "Jayapura",
  "ips": {
    "semester1": 3.5,
    "semester2": 3.7,
    "semester3": 3.8,
    "semester4": 3.6,
    "semester5": 3.9
  },
  "sks": 120
}
```

### **2️⃣ Ambil Semua Mahasiswa (GET)**
- **URL:** `http://localhost:5000/api/students`

### **3️⃣ Ambil Mahasiswa Berdasarkan ID (GET)**
- **URL:** `http://localhost:5000/api/students/{id}`

### **4️⃣ Update Mahasiswa (PUT)**
- **URL:** `http://localhost:5000/api/students/{id}`
- **Body (JSON):**
```json
{
  "name": "John Updated",
  "gender": "Laki-laki",
  "schoolOrigin": "SMA Negeri 2 Jayapura",
  "schoolRegion": "Jayapura",
  "ips": {
    "semester1": 3.6,
    "semester2": 3.8,
    "semester3": 3.9,
    "semester4": 3.7,
    "semester5": 4.0
  },
  "sks": 130
}
```

### **5️⃣ Hapus Mahasiswa (DELETE)**
- **URL:** `http://localhost:5000/api/students/{id}`

---

## 📌 Teknologi yang Digunakan
- **Backend:** Node.js, Express.js, MongoDB
- **Frontend:** React.js
- **Algoritma:** Decision Tree C4.5

---

## 🤝 Kontribusi
Jika ingin berkontribusi:
1. Fork repository ini
2. Buat branch baru (`git checkout -b fitur-baru`)
3. Commit perubahan (`git commit -m 'Menambahkan fitur baru'`)
4. Push ke branch (`git push origin fitur-baru`)
5. Buat **Pull Request**

---

## 📞 Kontak
Jika ada pertanyaan atau ingin berdiskusi, hubungi:
- **Email:** your.email@example.com
- **GitHub:** [your-github](https://github.com/username)

---

**🚀 Selamat Membangun Sistem Prediksi Kelulusan Mahasiswa!** 🎓

