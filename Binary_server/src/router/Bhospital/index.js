const router = require('express').Router();
const BhospitalCtrl = require('./Bshospital.ctrl');

router.get('/', BhospitalCtrl.GetBhospital);

module.exports = router;