const router = require('express').Router();
const chaseCtrl = require('./BloodChase.Ctrl');

router.get('/list/:idx', chaseCtrl.getchases);
router.get('/:idx', chaseCtrl.getchase);

module.exports = router;