# Learn Express JS

## EXPRESS JS
Express.js, or simply Express, is a back end web application framework for building RESTful APIs with Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js

## INSTALL EXPRESS JS

### Install

    1. Initialize node package - write the command in terminal
        "$-npm init"
    2. Now for install Express write the command in terminal
        "$-npm i express

### For more information visit
- https://www.npmjs.com/package/express
- Express documentation = https://expressjs.com/en/5x/api.html

### Important method

 1. app.listen (For Access Port)
 2. app.use (For Control request like GET/POST)
 3. Sending a Response most important parameter was request (req) and response (res)

 #### Express Work -
 * Listen for request
 * parse request (text based request convert into object thats why javascript understand the request)
 
 ### Routing
 It is a process of selecting a path for traffic in a network or between or across multiple networks.

 app.get("*") define wildcat path

 ### Nodemon
A package for automatically restart server with code changes.
 * install Nodemon = "$- npm install nodemon 