const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const urologicSchema = new Schema({
  institution: { type: String, required: true },
  presentation: { type: String, required: true },
  speaker: { type: String, required: true },
  date: { type: String, required: true },
  link: { type: String, required: true },
}, {
  timestamps: true,
});

const Urologic = mongoose.model('Urologic', urologicSchema);

module.exports = Urologic;
