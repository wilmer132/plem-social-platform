const User = require('./User');

function retrieveAllUsers(request, response) {
  User.find({}, function (error, Users) {
    if (error) {
      response.status(400).end();
    }
    /*List of users must be converted */
    response.status(200).send(JSON.stringify(Users));
  });
}

module.exports = {
  retrieveAllUsers,
}