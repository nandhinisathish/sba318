import express from 'express';
import { database } from '../utilities/database.js';

const router = express.Router();

// Create - POST
// @route: /api/user/
// @desc: create user
// @access: public
router.post('/', (req, res)=>{
    let {user_name, user_email} = req.body;
    
    let newDBEntry = { id: database.length + 1,
        user_name,
        user_email
    }

    database.push(newDBEntry);

    console.log(req.body);
 //res.json({msg:"testing Create or POST route"});
 
  res.status(201).json({msg: "New entry created in the DB", item: newDBEntry})

 // this will redirect to the path given
  //res.status(201).redirect('/api/user');
})

// Read - GET
// @route: /api/user/
// @desc: get user information
// @access: public
router.get('/', (req, res)=>{
 //res.json({msg:"testing GET route"});
  res.json(database);
})

// Read - GET
// @route: /api/user/:id
// @desc: get user information
// @access: public
router.get('/:id', (req, res)=>{
 //res.json({msg:"testing GET route"});
  let id = Number(req.params.id);
  res.json(database[id]);
})

// Update - PUT
// @route: /api/user/:id
// @desc: update user information
// @access: public
router.put('/:id', (req, res)=>{
    let id = Number(req.params.id);
    database.splice(id, 1, {id, name: req.body.name});
 res.status(201).json({msg:"testing Create or PUT route", item: req.body.name});
})


// Delete - DELETE
// @route: /api/user/:id
// @desc: delete user information
// @access: public
router.delete('/:id', (req, res)=>{
    let id = Number(req.params.id);
    database.splice(id,1);
 res.json({msg:"testing DELETE route"});
})

export default router;
