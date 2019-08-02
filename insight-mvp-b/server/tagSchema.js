var mongoose = require('mongoose');

var tagSchema = new mongoose.Schema({
  id: { type: Number, unique: true, index: true },
  organization: Array,
  orgCategory: Array,
  university: Array,
  fieldStudy: Array,
  interestType: Array,
  eventType: Array
});

module.exports = mongoose.model('Character', tagSchema);