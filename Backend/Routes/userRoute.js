import { SignupController, LoginController, LogoutController, GetAllUserController, GoogleLoginController, GetProfileController } from '../Controller/userController.js'
import express from 'express';
import checkAdminModels from '../Middleware/adminAuth.js';
import verifyToken from '../Middleware/verifyToken.js';
const router = express.Router();

router.post("/signup", SignupController);
router.post("/login",LoginController);
router.get("/allusers", verifyToken, checkAdminModels, GetAllUserController);
router.post("/logout",LogoutController);
router.post('/google-login', GoogleLoginController);
router.get("/profile", verifyToken, GetProfileController);

// router.put('/change-password',verifyToken, UpdatePasswordController);
// router.put('/change-profile', UpdateProfileController);




export default router;