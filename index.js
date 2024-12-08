const express = require("express");
const app = express();

// console.dir(app);

let port = 3000; //Ports are the logical endpoints of a network connection that is used to exchange information between a web server and web client.

app.listen(port, () =>{
    console.log(`app is listening on port ${port}`);
});

app.use((req, res) => {
    console.log("request received");
})
