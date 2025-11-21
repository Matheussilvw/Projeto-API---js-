const express = require('express');
const router = express.Router();

router.use('/auth', require('./auth'));
router.use('/organizations', require('./organizations'));
router.use('/opportunities', require('./opportunities'));
router.use('/users', require('./users'));

module.exports = router;
