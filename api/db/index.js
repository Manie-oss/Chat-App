const mongoose = require('mongoose');
const userSchema = require('./schemas/user');

mongoose.connect(process.env.MONGODB_URL);

const User = mongoose.model('User', userSchema);

module.exports = {
    User
};