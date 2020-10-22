const router = require('express').Router();
const chaseCtrl = require('./BloodChase.Ctrl');

router.get('/:idx', chaseCtrl.getchase);

module.exports = router;