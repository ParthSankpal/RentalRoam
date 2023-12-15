import express from 'express';
import { google, signin, signup,signout,vendorsignin, vendorsignup } from '../controllers/auth.controller.js';
const router = express.Router();


router.post("/signin", signin);
router.post("/vendorsignin", vendorsignin);
router.post("/signup", signup);
router.post("/vendorsignup", vendorsignup);
router.post("/google", google);
router.get("/signout", signout);

export default router;