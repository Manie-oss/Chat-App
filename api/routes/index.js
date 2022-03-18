const { Router } = require('express');
const { authRouter } = require('./auth');
const { withAuth } = require('./route.utils');
const { userRouter } = require('./user');

const router = Router();

router.use('/auth', authRouter);
router.use('/user', withAuth(userRouter));

module.exports = router;