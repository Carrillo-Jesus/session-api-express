const userController = require('@/controllers/UserController');
const { verifyToken } = require('@/middlewares/auth');
const express = require('express');
const router = express.Router();

router.post('/get-user',verifyToken, userController.getUser);
module.exports = router;
