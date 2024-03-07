const jwt = require('jsonwebtoken');
const { app } = require('@/config');

const secret = app.jwt_secret;

exports.verifyToken = (req, res, next) => {
  const token = req.headers['x-access-token'];

  if (!token) {
    return res.status(403).send({ auth: false, message: 'No authorized' });
  }

  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      return res.status(500).send({ auth: false, message: 'Failed to authenticate token' });
    }
    req.user = decoded;
    next();
  });
};
