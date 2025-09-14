// Imports
import express from 'express';
import globalErr from './middlewares/globarErr.js';
import userRoutes from './routes/userRoutes.js';
import studentsRoutes from './routes/studentsRoutes.js';
import courseDetailRoutes from './routes/courseDetailsRoutes.js'
import morgan from 'morgan';
import { database } from './utilities/database.js';
import fs from 'fs';

// Environment variables
const app = express();
const PORT = 3000;

// View Engines
app.engine("extn", (filePath, options, callback)=>{
fs.readFile(filePath,(err, content)=>{
    if(err) return callback(err);

    let rendered;

    rendered = content.toString().replaceAll("#title#", options.title);

    return callback(null, rendered);

})  

})

// Set up views directory and register template engine
app.set('views', './views');
app.set('view engine', "extn");

// Middlewares
app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Routes
app.use('/api/user', userRoutes);
app.get('/',(req, res)=>{
    let options ={
        title: "New student info",
        content:"addfsfdsfdgsf hfhjfhf hjgkghgkhfg"
    }

    res.render("userForm", options);
})
app.use('/api/students', studentsRoutes);
app.use('/api/courseDetails', courseDetailRoutes);

// Global error handling
app.use(globalErr);


// Server Listener
app.listen(PORT, () =>{
    console.log(`Server running on the PORT: ${PORT}`);
})