const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SessionSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  workouts: {
    type: Array,
    default: null
  },
  created: {
    type: Date,
    default: Date.now
  }
});

module.exports = Session = mongoose.model('session', SessionSchema);