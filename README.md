# SBA 

## Create the server and run 
1. Create server.js file and then run git init to initailize with git
2. run "npm init -y" - to generate the basic project settings
3. Add type as "module" or change the extension as "mjs" everywhere(in package.json)
4. install "morgan" and "nodemon" using following from vs-code terminal
    npm i express or npm install express
    npm i morgan
    npm i nodemon
5. In package.json, add -  "dev": "nodemon server.js" 
6. create ".gitignore" and add "node_modules/" - prevents this folder from getting added to git
7. In server.js file, 
    -- import express
    -- create a variable and call express in it.
    -- create a variable and assign the value for PORT.
    -- using express call the listen method to run the server.
    -- add a console log statement in the callback function in the listen method,
        server running status.
8. In the terminal, run the command "npm run dev"
9. The below statement confirms server is up and running
     "Server running on the PORT: 3000" 
     can also verify the same in the browser http://localhost:3000/

     