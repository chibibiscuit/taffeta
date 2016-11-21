var mongoose = require('mongoose');

var linkSchema = new mongoose.Schema({
  userId: Number,
  icon: String,
  text: String,
  url: String,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('link', linkSchema);
