const router = require('express').Router();
const auth = require('./auth');
const dog = require('./dog');
const hospital = require('./hospital');

router.use('/auth', auth);
router.use('/dog', dog);
router.use('/hospital', hospital);

module.exports = router;