const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Load Session Model
const Session = require('../../../models/Session');

// Load User Model
const User = require('../../../models/User');

// @route  GET api/profile/test
// @desc   Tests the profile route
// @access Public
router.get('/test', (req, res) => res.json({ msg: "Profile Works" }));

// @route   POST api/profile/create
// @desc    Create a new profile
// @access  Private
router.post('/create', passport.authenticate('jwt', { session: false }), (req, res) => {
  const profileFields = {};
  profileFields.user = req.user.id;
  if (req.body.currentWeight) shiftFields.currentWeight = req.body.currentWeight;
  if (req.body.goal) shiftFields.goal = req.body.goal;

  new Profile(profileFields).save()
    .then(profile => res.json(profile))
    .catch(err => res.status(404).json(err));
});


// @route   POST api/profile/edit-profile
// @desc    Edit user's profile
// @access  Private
router.post('/edit-profile', passport.authenticate('jwt', { session: false }), (req, res) => {
  const profileFields = {};
  profileFields.user = req.user.id;
  if (req.body.currentWeight) shiftFields.currentWeight = req.body.currentWeight;
  if (req.body.goal) shiftFields.goal = req.body.goal;

  Profile.findOneAndUpdate(
    { _id: profileFields.user },
    { $set: profileFields },
    { new: false, useFindAndModify: false }
  )
    .then(profile => res.json(profile))
    .catch(err => res.status(404).json(err));
});

module.exports = router;