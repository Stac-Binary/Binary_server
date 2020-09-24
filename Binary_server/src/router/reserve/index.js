const router = require('express').Router();
const reserveCtrl = require('./reserve.ctrl');

router.post('/', reserveCtrl.Postreserve);
router.get('/', reserveCtrl.Getreserve);

router.get('/:idx', reserveCtrl.Getreserves);
module.exports = router;