import express from 'express';
const router = express.Router();
import UserController from '../controllers/userController.js';
import checkUserAuth from '../middlewares/auth-middleware.js';

// Route Level Middleware
router.use('/changepassword' , checkUserAuth)
router.use('/loggeduser' , checkUserAuth)


// Public Routes (Home Page)
router.post('/register', UserController.userRegistration)
router.post('/login', UserController.userLogin)
router.post('/reset-password-by-email', UserController.ResetUserPasswordbySendEmail)
router.post('/reset-password/:id/:token', UserController.userPasswordReset)

// Protected Routes (Dashboard, Password Change)

router.post('/changepassword', UserController.changeUserPassword)
router.get('/loggeduser', UserController.loggedUser)

export default router