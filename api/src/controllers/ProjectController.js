const Project = require('../models/Project');
const User = require('../models/User');
module.exports = {
    async store(request, response){
        const { name, description, labels, image, user_id } = request.body;
        const labelsArray = labels.split(',').map(label => label.trim());
        console.log(labelsArray);
        const project = await Project.create({
            name,
            description,
            labels: labelsArray,
            image,
            owner: user_id
        });
        if(project){
            await User.updateOne({
                _id: user_id
            },
            {
                $push: {projects: project._id}
            })
        }
        return response.json(request.body);
    }
}