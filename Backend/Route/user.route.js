const express = require('express');
const route = express.Router();
const UserService = require('../Services/user.service');
const UserControllers = require('../controllers/user.controllers');
const UserModal = require('../Schema/user.schema');
const userMiddleware = require('../middleware/user.middleware');

const userService = new UserService(UserModal);
const userControllers = new UserControllers(userService);

route.post('/user/register', userControllers.register);
route.post('/user/login', userControllers.login);
route.get('/user/refreshToken', userControllers.refreshToken);
route.get('/user/logout', userMiddleware, userControllers.logout);

module.exports = route;
