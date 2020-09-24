const router = require('express').Router();
const dogCtrl = require('./dog.Ctrl');

router.post('/', dogCtrl.postDog);

router.put('/:idx', dogCtrl.modifyDog);

module.exports = router;