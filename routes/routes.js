const usercontroller = require('../controllers/controllers');

const router = require('express').Router();

router.post('/api/users',usercontroller);

module.exports = router