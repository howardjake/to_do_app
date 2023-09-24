const express = require('express');
const router = express.Router();
const dashCtrl = require('../controllers/dashboard');

router.get('/', dashCtrl.index);
router.get('/logout', dashCtrl.logout);

router.post('/create', dashCtrl.create);

router.delete('/:id', dashCtrl.deleteOne);

router.put('/:id', dashCtrl.update);

module.exports = router;