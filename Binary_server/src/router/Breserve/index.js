const router = require('express').Router();
const BreserveCtrl = require('./Breseve.ctrl');

router.post('/', BreserveCtrl.PostBreserve);

module.exports = router;