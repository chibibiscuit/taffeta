var mongoose = require('mongoose');

var backgroundSchema = new mongoose.Schema({
  userId: Number,
  url: String,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('background', backgroundSchema);
