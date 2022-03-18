const userSchema = {
    username: String,
    password: String,
    phone: String
}

module.exports = function(db) {
    return db.model('User', userSchema);
}