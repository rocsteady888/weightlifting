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


module.exports = router;