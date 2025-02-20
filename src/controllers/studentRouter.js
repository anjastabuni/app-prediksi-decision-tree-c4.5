const Student = require("../models/Student");

// Tambah Data Mahasiswa
exports.addStudent = async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).json({ message: "Mahasiswa berhasil ditambahkan", student });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Ambil Semua Data Mahasiswa
exports.getStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Ambil Satu Data Mahasiswa
exports.getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) return res.status(404).json({ message: "Mahasiswa tidak ditemukan" });
    res.json(student);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update Data Mahasiswa
exports.updateStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ message: "Data mahasiswa diperbarui", student });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Hapus Data Mahasiswa
exports.deleteStudent = async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
    res.json({ message: "Mahasiswa dihapus" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
