import express from 'express';


import { verifyToken } from '../utils/verifyUser.js';
import { createTripRequest, getTripRequest,getAllTripRequest } from '../controllers/triprequest.controlle.js';


const router = express.Router();

router.post('/create',  verifyToken, createTripRequest);
router.get('/:userId/requests', getTripRequest);
router.get('/all', getAllTripRequest);
// router.delete('/delete/:id', verifyToken, deleteListing);
// router.post('/update/:id',  verifyToken, updateListing);
// router.get('/get/:id', getListing);
export default router;