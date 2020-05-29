const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const upcomingSchema = new Schema({
  program: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: String, required: true },
  link: { type: String, required: true },
  page: { type: String, required: true },
  bottomtext: { type: String, required: true },
}, {
  timestamps: true,
});

const Upcoming = mongoose.model('Upcoming', upcomingSchema);

module.exports = Upcoming;
