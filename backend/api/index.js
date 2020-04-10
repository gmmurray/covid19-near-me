const express = require('express');
const router = express.Router();

router.use('/states', require('./states'));
router.use('/countries', require('./countries'));
router.use('/world', require('./world'));
router.use('/twitter', require('./twitter'));
router.use('/overview', require('./overview'));

module.exports = router;
