import { SignupController, LoginController, LogoutController, GetAllUserController, GoogleLoginController } from '../Controller/userController.js'
import express from 'express';
// import verifyToken from '../Middleware/VerifyToken.js'
// import checkAdminModels from '../Middleware/AuthMiddleware.js';
const router = express.Router();

router.post("/signup", SignupController);
router.post("/login",LoginController);
router.get("/allusers",GetAllUserController);
router.post("/logout",LogoutController);
router.post('/google-login', GoogleLoginController);
// router.put('/change-password',verifyToken, UpdatePasswordController);
// router.put('/change-profile', UpdateProfileController);




export default router;