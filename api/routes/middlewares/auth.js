const db = require('../../db');
const AuthService = require('../../services/auth');
const { RESPONSE_CODES } = require('../../utils/constants');

function extractToken(req) {
    return req.headers['x-access-token'];
}

function authMiddleware(req, res, next) {
    const token = extractToken(req);

    try {
        const data = AuthService.verifyToken(token);
        if(AuthService.isExpired(data)) {
            res.status(RESPONSE_CODES.Unauthorized).end('Token expired');
            return;
        }

        req.user = data;
    } catch {
        res.status(RESPONSE_CODES.Unauthorized).end('Invalid token');
        return;
    }
    next();
}

module.exports = {
    authMiddleware
};