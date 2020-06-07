const mongoose = require('mongoose');
const UserSchema = require('./User');

const ProjectSchema = new mongoose.Schema({
    name: String,
    description: String,
    labels: [String],
    image_url: String,
    owner: UserSchema,
    users: [UserSchema]
});

module.exports = mongoose.model('Project', ProjectSchema);