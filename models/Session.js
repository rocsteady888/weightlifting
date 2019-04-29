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
  startTime: {
    type: Date,
    default: Date.now
  },
  endTime: {
    type: Date
  },
  isComplete: {
    type: Boolean,
    default: false
  }
});

module.exports = Session = mongoose.model('session', SessionSchema);