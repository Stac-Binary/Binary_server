const router = require('express').Router();
const hospitalCtrl = require('./hospital.ctrl');

router.get('/', hospitalCtrl.GetHospital);
// router.get('/bleed', hospitalCtrl.GetBHospital);

module.exports = router;
