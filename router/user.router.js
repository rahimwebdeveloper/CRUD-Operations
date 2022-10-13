const express = require('express');
const router = express.Router();
const userController = require('../controller/user.controller')


router.route('/all')
    .get(userController.getAllUser)

router.route('/random')
    .get(userController.getRandomUser)

router.route('/save')
    .post(userController.postUser)

router.route('/update')
    .patch()

router.route('/bulk-update')
    .patch()

router.route('/delete')
    .delete()

module.exports = router;