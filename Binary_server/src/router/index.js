const router = require('express').Router();
const auth = require('./auth');
const dog = require('./dog');
const hospital = require('./hospital');
const reserve = require('./reserve');

router.use('/auth', auth);
router.use('/dog', dog);
router.use('/hospital', hospital);
router.use('/reserve', reserve);

module.exports = router;