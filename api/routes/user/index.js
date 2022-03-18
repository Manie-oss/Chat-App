const { Router } = require("express");
const UserService = require("../../services/user");
const { RESPONSE_CODES } = require("../../utils/constants");

const userRouter = Router();

userRouter.use('/:username', async (req, res) => {
    const { username } = req.params;
    const user = await UserService.getUserByUsername(username);
    if (!user) {
        res.status(RESPONSE_CODES.NotFound).end();
        return;
    }
    res.end(JSON.stringify(user));
});

module.exports = {userRouter};