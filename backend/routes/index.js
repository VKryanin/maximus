const express = require('express');
const router = express.Router();
const collectionRouter = require('./collection');

router.use('/api', collectionRouter);

module.exports = router;