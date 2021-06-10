const express = require('express');
const router = express.Router();

/*Import models for reference in requests handling*/
// let User = require('../models/User/User');

/*Import controllers for models*/
let UserController = require('../models/User/UserController');

router.get('/allUsers', UserController.retrieveAllUsers);

module.exports = router;