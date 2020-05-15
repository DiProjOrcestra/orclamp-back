const { Router } = require('express');
const axios = require('axios');
const User = require('./models/User');

const routes = Router();

routes.post('/users', async (request, response)=>{
    const { name, github_account, email, password } = request.body;
    console.log(name);
    console.log(github_account);
    console.log(email);
    console.log(password);

    const github = await axios.get(`https://api.github.com/users/${github_account}`);
    const { avatar_url } = github.data;
    console.log(avatar_url);
    const user = await User.create({
        name,
        email,
        profile_image_url: avatar_url,
        github_account,
        password,
    });
    return response.json(user);
});

module.exports = routes;