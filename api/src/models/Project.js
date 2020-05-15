const mongoose = require('mongoose');
const UserSchema = require('./User');

const ProjectSchema = new mongoose.Schema({
    name: String,
    description: String,
    labels: [String],
    image: String,
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserSchema'
    },
    users: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'UserSchema',
    },
})