import express from "express";
const router = express.Router();
import {createDetails, readDetails, deleteDetails, updateDetails} from '../controllers/detailsController.js'

// Create API
router.post('/add', createDetails);
// Read API
router.get('/:id', readDetails) ;
// Update api
router.put('/:id',updateDetails);
// delete API
router.delete('/:id', deleteDetails);

export default router;