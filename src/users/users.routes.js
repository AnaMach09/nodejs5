const router = require('express').Router();
const userController = require('./user.controller')

router.get('/', userController.getUsers ) ;

router.post ('/', userController.createUsers);

router.delete('/:id', userController.deleteUsers);

router.put('/:id', userController.updateUsers);

module.exports = router;