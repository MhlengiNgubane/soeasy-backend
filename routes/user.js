const router = require('express').Router();
const userController = require('../controllers/userController')
const {verifyTokenAndAuthorization} = require('../middleware/verifyToken');

router.get("/verify/:otp",verifyTokenAndAuthorization, userController.verifyAccount);
router.get("/verify_phone/:phone",verifyTokenAndAuthorization, userController.verifyPhone);

router.get("/",verifyTokenAndAuthorization, userController.getUser);
router.delete("/",verifyTokenAndAuthorization, userController.deleteUser);

module.exports = router;