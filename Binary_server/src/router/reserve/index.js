const router = require('express').Router();
const reserveCtrl = require('./reserve.ctrl');

router.post('/', reserveCtrl.Postreserve);

module.exports = router;