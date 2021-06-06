const express = require('express');
const router = express.Router();

router.get('/test', function (request, response) {
  response.status(200).json({body: "Testing from ./routes/routes.js"});
});

module.exports = router;