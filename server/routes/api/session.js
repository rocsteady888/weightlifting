const express = require('express');
const router = express.Router();

// @route  GET api/session/test
// @desc   Tests the session route
// @access Public
router.get('/test', (req, res) => res.json({ msg: "Session Works" }));

module.exports = router;