const router = require('express').Router();
const mainCtrl = require('./main.ctrl');

router.get('/', mainCtrl.GetMain);

module.exports = router;