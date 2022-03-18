const db = require('../db');

class UserService {
    /**
     * Returns user object without the password field
     */
    static async getUserByUsername(username) {
        return await db.User.findOne({username}).select('-password').exec();
    }

    static async createUser(user) {
        const newUser = db.User(user);
        return await db.save();
    }

    static async isCorrectPassword(username, hashedPassword) {
        const { password } = await db.User.findOne({username}).select('password').exec();
        return password === hashedPassword;
    }
}

module.exports = UserService;