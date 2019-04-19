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
  reps: Array,
  weight: Array,
  rest: Array
});

module.exports = Workout = mongoose.model('workout', WorkoutSchema);