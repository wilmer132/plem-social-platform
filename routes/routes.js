const express = require('express');
const router = express.Router();

/*Import controllers for models*/
let UserController = require('../models/User/UserController');

router.get('/allUsers', UserController.retrieveAllUsers);

module.exports = router;