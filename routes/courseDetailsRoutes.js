import express from 'express';
import { courseDetailsData } from '../utilities/courseDetailsData.js';

const router = express.Router();

router.get('/', (req, res)=>{
    res.json(courseDetailsData);
})


export default router;