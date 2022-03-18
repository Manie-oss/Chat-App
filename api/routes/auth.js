const { Router } = require("express");
const AuthService = require("../services/auth");
const UserService = require("../services/user");
const { RESPONSE_CODES } = require("../utils/constants");

const authRouter = Router();

function generateUserData(userInfo) {
    return {username: userInfo.username};
}

authRouter.post('/login', (req, res) => {
    const {username, password} = req.body;
    console.log(req.body);
    const hashedPassword = AuthService.hashPassword(password);
    console.log(hashedPassword);

    if (UserService.isCorrectPassword(username, hashedPassword)) {
        const userData = generateUserData({username});
        const token = AuthService.signData(userData);

        res.end(JSON.stringify({
            token
        }));
        return;
    }

    res.status(RESPONSE_CODES.Forbidden).end('Invalid username/password combination');
});

authRouter.post('/register', (req, res) => {

});

module.exports = { authRouter };