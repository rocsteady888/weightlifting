const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Load Session Model
const Session = require('../../../models/Session');

// Load User Model
const User = require('../../../models/User');

// @route   GET api/workout/test
// @desc    Tests workout route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Workout Works' }));

// @route   POST api/session/create
// @desc    Create a new session
// @access  Private
router.post('/create', passport.authenticate('jwt', { session: false }), (req, res) => {
  const sessionFields = {};
  if (req.body.clockInDesc) shiftFields.clockInDesc = req.body.clockInDesc;

  new Session(sessionFields).save()
    .then(session => res.json(session))
    .catch(err => res.status(404).json(err));
});

// @route   POST api/session/add-workouts/:sessionId
// @desc    Add workouts to a session with param sessionId
// @access  Private
router.post('/add-workouts/:sessionId', passport.authenticate('jwt', { session: false }), (req, res) => {
  const sessionFields = {};
  if (req.body.workouts) sessionFields.workouts = req.body.workouts;

  Session.findOneAndUpdate(
    { _id: req.params.sessionId },
    { $set: sessionFields },
    { new: false, useFindAndModify: false }
  )
    .then(session => res.json(session))
    .catch(err => res.status(404).json(err));

});

// @route   GET api/session/find/:sessionId
// @desc    Find a session by session _id
// @access  Private
router.get('/find/:sessionId', passport.authenticate('jwt', { session: false }), (req, res) => {
  const errors = {};
  Session.findOne({ _id: req.params.sessionId })
    .then(sessions => {
      if (!sessions) {
        errors.nosession = 'There was no session found';
        return res.status(400).json(errors);
      }
      res.json(sessions);
    })
    .catch(err => res.status(404).json(err));
});

// @route   GET api/session/recent
// @desc    Get current user's sessions
// @access  Private
router.get('/recent', passport.authenticate('jwt', { session: false }), (req, res) => {
  const errors = {};
  Session.find({ user: req.user.id }).limit(5).sort({ _id: -1 })
    .then(sessions => {
      if (!sessions) {
        errors.sessions = 'There are no sessions for this user';
        return res.status(400).json(errors);
      }
      res.json(sessions);
    })
    .catch(err => res.status(404).json(err));
});


module.exports = router;