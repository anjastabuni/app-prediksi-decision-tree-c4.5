const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ["Laki-laki", "Perempuan"],
    required: true,
  },
  schoolOrigin: {
    type: String,
    required: true,
  },
  schoolRegion: {
    type: String,
    required: true,
  },
  ips: {
    semester1: {
      type: Number,
      required: true,
    },
    semester2: {
      type: Number,
      required: true,
    },
    semester3: {
      type: Number,
      required: true,
    },
    semester4: {
      type: Number,
      required: true,
    },
    semester5: {
      type: Number,
      required: true,
    },
  },
  sks: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Student", StudentSchema);
