const port = "3000";
const express = require("express");
const app = express();
const layouts = require("express-ejs-layouts");

//middlewareの設定
app.set("view engine", "ejs");
app.use(layouts);

app.get("/", (req, res) => {
    res.send("hello world")
});

app.listen(port, () => {
    console.log(`the server is listening on ${port}`)
});