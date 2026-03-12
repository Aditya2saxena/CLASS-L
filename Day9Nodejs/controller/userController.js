const users = require("../Modules/userModules");

exports.getUsers = (req, res) => {
    res.json(users);
};

exports.getUsersById = (req, res) => {

    const userId = req.params.id;

    users.map(userDetail => {

        const id = userDetail['id'];

        if (id == userId) {
            res.json(userDetail);
        }

    });

};