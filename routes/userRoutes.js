const express = require('express');
const router = express.Router();
const joiSchemaValidation = require('../middleware/joiSchemaValidation');
const userController = require('../controller/userController');
const userSchema = require('../apiSchema/userSchema');

module.exports = router;

router.post('/create', joiSchemaValidation.validateBody(userSchema.login),
userController.Login
);

router.post('/list',
userController.Addpost
);
router.post('/search',
userController.Addpost
);

router.post('/update',joiSchemaValidation.validateBody(userSchema.update),
userController.Updatepost
);
router.post('/delete',joiSchemaValidation.validateBody(userSchema.delete),
userController.Deletepost
);