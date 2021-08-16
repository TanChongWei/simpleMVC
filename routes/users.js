const express = require('express');
const router = express.Router();
const { validateFields } = require('../middleware/helpers')
const userController = require('../controllers/controllers')

router.route('/')
  .get(userController.getIndexForm)
  .post(validateFields, userController.searchUserDetails)

router.route('/form')
  .get(userController.getNewUserForm)

router.route('/user')
  .post(validateFields, userController.createNewUser)

router.route('/user/:id')
  .get(userController.showUserDetails)
  .put(validateFields, userController.updateUserDetails)
  .delete(userController.deleteUser)

router.route('/user/:id/edit')
  .get(userController.getEditUserForm)

module.exports = router;
