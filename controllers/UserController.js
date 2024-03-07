const User = require('@/models/UserModel');

const UserController = {

    getUser(req, res) {
        try {
            const user = req.user;
            res.status(200).send(user);
        }
        catch (error) {
            console.log(error);
            res.status(500).send('There was a problem getting the user');
        }
    },
};

module.exports = UserController;