const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    profile_image_url: String,
    github_account: String,
    password: String,
});

module.exports = mongoose.model('User', UserSchema);