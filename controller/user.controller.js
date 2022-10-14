let users = require('../data.json')


// get random user for data,json file
module.exports.getRandomUser = (req, res) => {
    const string = JSON.stringify(users);
    const parsedUser = JSON.parse(string);

    res.send(parsedUser[Math.floor(Math.random() * parsedUser.length)]);

}


// get all user for data.json file
module.exports.getAllUser = (req, res) => {
    const { limit, page } = req.query;
    res.send(users.slice(0, limit));
}


module.exports.postUser = (req, res) => {
    if (req.body.id == undefined || req.body.gender == undefined || req.body.name == undefined || req.body.contact == undefined || req.body.address == undefined || req.body.photoUrl == undefined) {
        res.send("A value is missing");
    } else {
        users.push(req.body);
        res.send("Data has been saved");
    }
}

module.exports.updateUser = (req, res) => {
    const string = JSON.stringify(users);
    const parsedUser = JSON.parse(string);

    const i = parsedUser.findIndex(object => {
        return object.id === req.query.id;
    });


    if (i == -1) {
        console.log(i);
        res.send("Id not found");
    } else {
        if (req.body.name != undefined) {
            users[i].name = req.body.name;
        }
        if (req.body.gender != undefined) {
            users[i].gender = req.body.gender;
        }
        if (req.body.address != undefined) {
            users[i].address = req.body.address;
        }
        if (req.body.contact != undefined) {
            users[i].contact = req.body.contact;
        }
        if (req.body.photoUrl != undefined) {
            users[i].photoUrl = req.body.photoUrl;
        }



        res.send("Successfully Updated User");
    }

}

module.exports.bulkUpdateUser = (req, res) => {
    const ids = req.body;

    let finalData = [];
    let allIds = []
    let abc = [];

    try {

        for (const item of ids) {
            allIds.push(item);
        }
        for (const id of allIds) {
            let MassingData = users.find(user => user.id == id.id);
            abc.push(MassingData);
        }
        for (let i = 0; i < abc.length; i++) {
            const singleUser = abc[i];

            let updateData = users.find(x => x.id == singleUser.id);
            const { gender, name, contact, address, photoUrl } = updateData;

            updateData.gender = allIds[i].gender ? allIds[i].gender : gender;

            updateData.name = allIds[i].name ? allIds[i].name : name;
            updateData.contact = allIds[i].contact ? allIds[i].contact : contact;
            updateData.address = allIds[i].address ? allIds[i].address : address;
            updateData.photoUrl = allIds[i].photoUrl ? allIds[i].photoUrl : photoUrl;
            finalData.push(updateData);
        }
    } catch (error) {
        // let myError = error.message;
    }
    if (finalData == "") {
        res.send("set a multiple object in an array [{},{},{}]");
    } else {

        res.send(finalData);
    }
}


module.exports.deleteUser = (req, res) => {
    const string = JSON.stringify(users);
    const parsedUser = JSON.parse(string);

    const index = parsedUser.findIndex(object => {
        return object.id === req.body.id;
    });

    if (index == -1) {
        res.send("Id not found");
    } else {
        users.splice(index, 1);
        res.send("Successfully Deleted");
    }
}
