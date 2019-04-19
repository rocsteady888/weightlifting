const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Load Workout Model
const Workout = require('../../../models/Workout');

// Load User Model
const User = require('../../../models/User');

// @route   GET api/workout/test
// @desc    Tests workout route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Workout Works' }));

// @route   POST api/workout/create
// @desc    Create a new workout and clock in with a description
// @access  Private
router.post('/create', passport.authenticate('jwt', { session: false }), (req, res) => {
  const workoutFields = {};
  workoutFields.user = req.user.id;
  if (req.body.title) workoutFields.title = req.body.title;
  if (req.body.category) workoutFields.category = req.body.category;
  if (req.body.subCategory) workoutFields.subCategory = req.body.subCategory;
  if (req.body.reps) workoutFields.reps = req.body.reps;
  if (req.body.weight) workoutFields.weight = req.body.weight;
  if (req.body.rest) workoutFields.rest = req.body.rest;

  new Workout(workoutFields).save()
    .then(workout => res.json(workout))
    .catch(err => res.status(404).json(err));
});

// @route   POST api/workout/edit/:workoutId
// @desc    Edit workout with param workoutId
// @access  Private
router.post('/edit/:workoutId', passport.authenticate('jwt', { session: false }), (req, res) => {

  const workoutFields = {};
  if (req.body.clockInDesc) workoutFields.clockInDesc = req.body.clockInDesc;
  if (req.body.clockIn) workoutFields.clockIn = req.body.clockIn;
  if (req.body.clockOutDesc) workoutFields.clockOutDesc = req.body.clockOutDesc;
  if (req.body.clockOut) workoutFields.clockOut = req.body.clockOut;

  Workout.findOneAndUpdate(
    { _id: req.params.workoutId },
    { $set: workoutFields },
    { new: false, useFindAndModify: false }
  )
    .then(workout => res.json(workout))
    .catch(err => res.status(404).json(err));
});

// @route   GET api/workout/find/:workoutId
// @desc    Find a workout by workout _id
// @access  Private
router.get('/find/:workoutId', passport.authenticate('jwt', { session: false }), (req, res) => {
  const errors = {};
  Workout.findOne({ _id: req.params.workoutId })
    .then(workouts => {
      if (!workouts) {
        errors.noworkout = 'There was no workout found';
        return res.status(400).json(errors);
      }
      res.json(workouts);
    })
    .catch(err => res.status(404).json(err));
});

// @route   GET api/workout/recent
// @desc    Get current user's workouts
// @access  Private
router.get('/recent', passport.authenticate('jwt', { session: false }), (req, res) => {
  const errors = {};
  Workout.find({ user: req.user.id }).limit(5).sort({ _id: -1 })
    .then(workouts => {
      if (!workouts) {
        errors.workouts = 'There are no workouts for this user';
        return res.status(400).json(errors);
      }
      res.json(workouts);
    })
    .catch(err => res.status(404).json(err));
});

// @route   GET api/workout/all
// @desc    Get all of current user's workouts
// @access  Private
router.get('/all', passport.authenticate('jwt', { session: false }), (req, res) => {
  const errors = {};
  Workout.find({ user: req.user.id }).sort({ _id: -1 })
    .then(workouts => {
      if (!workouts) {
        errors.workouts = 'There are no workouts for this user';
        return res.status(400).json(errors);
      }
      res.json(workouts);
    })
    .catch(err => res.status(404).json(err));
});

module.exports = router;