const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('@/models/UserModel');
const { app } = require('@/config');

const secret = app.jwt_secret;

const AuthController = {
    async login(req, res) {
        const { username, password } = req.body;

        try {
            const user = await User.scope('withPassword').findOne( { where: { username } } );

            if (!user) {
                return res.status(400).send({ message: 'The username does not exist' });
            }

            if (!bcrypt.compareSync(password, user.password)) {
                return res.status(400).send({ message: 'The password or username is not valid.' });
            }

            delete user.dataValues.password;


            const token = jwt.sign({ user: user }, secret, {
                expiresIn: app.jwt_expires_in
            });

            res.status(200).send({ auth: true, token });
        } catch (error) {
            console.error(error);
            res.status(500).send('There was a problem logging in');
        }
    },

    async register(req, res) {
        const { username, email, password } = req.body;

        try {

            const userExistsByEmail = await User.findOne({ where: { email } });

            if (userExistsByEmail) {
                return res.status(400).send({ message: 'The email is already in use' });
            }

            const userExistsByUsername = await User.findOne({ where: { username } });

            if (userExistsByUsername) {
                return res.status(400).send({ message: 'The username is already in use' });
            }

            const hashedPassword = bcrypt.hashSync(password, 10);

            const user = await User.create( { username, password: hashedPassword, email } );
            delete user.dataValues.password;

            const token = jwt.sign({ user: user }, secret, {
                expiresIn: app.jwt_expires_in
            });

            res.status(200).send({ auth: true, token });
        } catch (error) {
            console.log(error);
            res.status(500).send('There was a problem registering your account');
        }
    },
      
    async logout(req, res) {
        res.status(200).send({ auth: false, token: null });
    },

};

module.exports = AuthController;