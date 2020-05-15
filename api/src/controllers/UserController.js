
const axios = require('axios');
const User = require('../models/User');

module.exports = {
    async index(request, response){
        user = await User.find();
        return response.json(user);
    },

    async store(request, response) {
        const { github_account, email, password, confirm_password } = request.body;
        console.log(github_account);
        console.log(email);
        console.log(password);

        const github = await axios.get(`https://api.github.com/users/${github_account}`);
        const { avatar_url, name = github_account } = github.data;
        console.log(avatar_url, name);
        const user = await User.create({
            name,
            email,
            profile_image_url: avatar_url,
            github_account,
            password,
        });
        return response.json(user);
    },

    async update(request, response){
        const {user_id, project_id} = request.body;
        console.log(request.body);
        return response.json({
            abc: 'xyz',
        })
    }
}