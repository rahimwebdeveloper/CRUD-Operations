let data = require('../data.json')


// get random user for data,json file
module.exports.getRandomUser = (req, res) => {
    const number = Math.floor(Math.random() * 10);
    const user = data.find(user => user.id == number);
    res.send(user);

}


// get all user for data.json file
module.exports.getAllUser = (req, res) => {
    res.send(data);
}


module.exports.postUser = (req, res) => {

}

module.exports.updateUser = (req, res) => {

}

module.exports.bulkUpdateUser = (req, res) => {

}


module.exports.deleteUser = (req, res) => {
    const id = req.params.id ;
    data = data.filter(user => user.id !== Number(id));
    res.send(data)
}
