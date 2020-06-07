const mongoose = require('mongoose');
const ProjectSchema = require('./Project');

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    image_url: String,
    github_user: String,
    password: String,
    projects: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'ProjectSchema',
    }
});

module.exports = mongoose.model('User', UserSchema);