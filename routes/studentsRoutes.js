import express from 'express';
import { studentsData } from '../utilities/studentsData.js';

const router = express.Router();

// Create - POST
// @route: /api/students/
// @desc: create user
// @access: public
router.post('/', (req, res)=>{
    let {user_name} = req.body;
    
    let newDBEntry = { id: database.length,
        user_name
    }

    database.push(newDBEntry);

    console.log(req.body);
 //res.json({msg:"testing Create or POST route"});
 
  res.status(201).json({msg: "New entry created in the DB", item: newDBEntry})

 // this will redirect to the path given
  //res.status(201).redirect('/api/user');
})

// Create - GET
// @route: /api/students/
// @desc: create user
// @access: public
router.get('/', (req,res) => {
res.json(studentsData);
})

export default router;