const mongoose = require('mongoose');
const createUserModel = require('./models/user');

mongoose.connect(process.env.MONGODB_URL);

const User = createUserModel(mongoose);

module.exports = {
    User
};