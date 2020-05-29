const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const houseSchema = new Schema({
  program: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: String, required: true },
  link: { type: String, required: true },
}, {
  timestamps: true,
});

const House = mongoose.model('House', houseSchema);

module.exports = House;
