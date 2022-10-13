const data = require('../data.json')

module.exports.getRandomUser = (req, res) => {
    const number = Math.floor(Math.random() * 10);
    const user = data.find(user => user.id == number);
    res.send(user);

}
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

}
