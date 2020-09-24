const router = require('express').Router();
const auth = require('./auth');
const dog = require('./dog');
const hospital = require('./hospital');
const reserve = require('./reserve');
const bhospital = require('./bhospital');
const breserve = require('./breserve');
const main = require('./main');
const upload = require('./upload');

router.use('/auth', auth);
router.use('/dog', dog);
router.use('/hospital', hospital);
router.use('/reserve', reserve);
router.use('/bhospital', bhospital);
router.use('/breserve', breserve);
router.use('/main', main);
router.use('/upload', upload);

module.exports = router;