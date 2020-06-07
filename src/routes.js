const { Router } = require('express');
const axios = require('axios');
const User = require('./models/User');
const Project = require('./models/Project');

routes = Router();

routes.get('/users', async (request, response) => {
    const user = await User.find();
    return response.json(user);
});

routes.post('/users', async (request, response) => {
    const {github_username, email, password} = request.body;
    const github_api = await axios.get(`https://api.github.com/users/${github_username}`);
    const {avatar_url, name} = github_api.data;
    console.log(avatar_url, name);

    const user = await User.create({
        name,
        email,
        image_url: avatar_url,
        github_username,
        password,
    });

    return response.json(user);
});

routes.get('/projects', async (request, response) => {
    const project = await Project.find();
    return response.json(project);
})
routes.post('/projects', async (request, response)=>{
    const {name, description, labels, image, owner} = request.body;
    const labelsArray = labels.split(',').map(label => label.trim());
    const user = await User.findById(owner);
    console.log(user);
    let project = null;
    if(user){
        project = await Project.create({
            name,
            description,
            labels: labelsArray,
            image,
            owner: user
        });
        if(project){
            await User.updateOne({
                _id: owner
            },
            {
                $push: {projects: project._id}
            });
        }
    }
    return response.json(project);
});

module.exports = routes;