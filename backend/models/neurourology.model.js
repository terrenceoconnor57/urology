const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const neurourologySchema = new Schema({
  institution: { type: String, required: true },
  presentation: { type: String, required: true },
  speaker: { type: String, required: true },
  date: { type: String, required: true },
  link: { type: String, required: true },
}, {
  timestamps: true,
});

const Neurourology = mongoose.model('Neurourology', neurourologySchema);

module.exports = Neurourology;
