const express = require('express');
const router = express.Router()

const user = require ("../controller/useController")
const validation = require('../validation/users/uservalidation')
router.post('/registerUser', user.userSignup)

router.post ("/reister", validation.registerUservalidation, user.userSignup)

 

module.exports = router;