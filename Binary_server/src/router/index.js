const router = require('express').Router();
const auth = require('./auth');
const dog = require('./dog');
const hospital = require('./hospital');
const reserve = require('./reserve');
const Bhospital = require('./Bhospital');
const Breserve = require('./Breserve');
const main = require('./main');

router.use('/auth', auth);
router.use('/dog', dog);
router.use('/hospital', hospital);
router.use('/reserve', reserve);
router.use('/bhospital', Bhospital);
router.use('/breserve', Breserve);
router.use('/main', main);

module.exports = router;