const express = require('express');
const route = express.Router();
const UserService = require('../Services/user.service');
const UserControllers = require('../controllers/user.controllers');
const UserModal = require('../Schema/user.schema');

const userService = new UserService(UserModal);
const userControllers = new UserControllers(userService);

route.post('/user/register', userControllers.register);

module.exports = route;
