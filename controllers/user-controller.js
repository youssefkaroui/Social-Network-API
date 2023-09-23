const { User, Thought } = require('../models');

const userController = {
  
    // Get all users
  getUsers(req, res) {
    User.find()
      .select('-__v')
      .then((userData) => {
        res.json(userData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },