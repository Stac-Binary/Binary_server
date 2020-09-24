const router = require('express').Router();
const Breserve = require('../../model/Breserve');
const BreserveCtrl = require('./Breseve.ctrl');

router.post('/', BreserveCtrl.PostBreserve);
router.get('/', BreserveCtrl.GetBreserve);

router.get('/:idx', BreserveCtrl.GetBreserves);

module.exports = router;