const express = require('express');
const authController = require('@/controllers/AuthController');
const { validateLogin, validateRegister } = require('@/middlewares/validation');

const router = express.Router();

// Register User
router.post('/register', validateRegister, authController.register);

// Login User
router.post('/login', validateLogin, authController.login);

// Logout User
router.post('/logout', authController.logout);

// Refresh Token
//router.post('/refresh-token', authController.refreshToken);

module.exports = router;