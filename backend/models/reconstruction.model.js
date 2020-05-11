const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reconstructionSchema = new Schema({
  institution: { type: String, required: true },
  presentation: { type: String, required: true },
  speaker: { type: String, required: true },
  date: { type: String, required: true },
  link: { type: String, required: true },
}, {
  timestamps: true,
});

const Reconstruction = mongoose.model('Reconstruction', reconstructionSchema);

module.exports = Reconstruction;
