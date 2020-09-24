const router = require('express').Router();
const hospitalCtrl = require('./hospital.ctrl');

router.get('/', hospitalCtrl.GetHospital);

module.exports = router;
