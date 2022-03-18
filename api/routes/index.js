const { Router } = require('express');
const { userRouter } = require('./user');

const router = Router();

router.get('/', (req, res) => res.end('Hello world'));
router.use('/user', userRouter);

module.exports = router;