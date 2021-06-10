const express = require('express');
const router = express.Router();

/*Import models for reference in requests handling*/
let User = require('../models/User/User');

router.get('/test', function (request, response) {
  response.status(200).json({body: "Testing from ./routes/routes.js"});
});

module.exports = router;