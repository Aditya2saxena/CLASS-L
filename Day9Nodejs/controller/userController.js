const users = require("../Modules/userModules");

exports.getUsers = (req, res) => {
    res.json(users);
};