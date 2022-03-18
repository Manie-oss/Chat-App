const { authMiddleware } = require('./middlewares/auth');

function withAuth(authProtectedRouter) {
    return [authMiddleware, authProtectedRouter];
}

module.exports = { withAuth };