var mongoose = require('mongoose');

var eventSchema = new mongoose.Schema({
  id: { type: Number, unique: true, index: true },
  name: String,
  subtitle: String,
  description: String,
  rsvpCount: Number,
  startDate: Date,
  endDate: Date,
  org: String,
  location: { 
      name: String,
      street: String,
      city: String,
      state: String,
      country: String,
      zipcode: String
  },
  infoURLs: Array,
  tags: { type: Number, unique: true }
});

module.exports = mongoose.model('Character', eventSchema);