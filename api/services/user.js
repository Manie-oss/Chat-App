const db = require('../db');

class UserService {
    static async getUserByUsername(username) {
        return await db.User.findOne({username}).exec();
    }

    static async createUser(user) {
        return await db.User.create(user);
    }
}