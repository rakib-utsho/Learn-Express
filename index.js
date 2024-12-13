const express = require("express");
const app = express();

// console.dir(app);

let port = 8080; //Ports are the logical endpoints of a network connection that is used to exchange information between a web server and web client.

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});

app.get("/", (req, res) => {
    res.send("hello i am root");
});

app.get("/:username/:id", (req, res) => {
    let {username, id} = req.params;
    console.log(req.params);
    res.send(`Welcome to the page of @${username}`);
});

