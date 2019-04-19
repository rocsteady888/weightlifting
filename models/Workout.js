const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  title: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  subCategory: {
    type: String,
    required: true
  },
  reps: {
    type: Array,
    default: null
  },
  weight: {
    type: Array,
    default: null
  },
  rest: {
    type: Array,
    default: null
  }
});

module.exports = Workout = mongoose.model('workout', WorkoutSchema);