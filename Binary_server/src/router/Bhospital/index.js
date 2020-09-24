const router = require('express').Router();
const BhospitalCtrl = require('./Bhospital.ctrl');

router.get('/', BhospitalCtrl.GetBhospital);

module.exports = router;