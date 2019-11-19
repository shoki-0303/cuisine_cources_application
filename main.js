const port = "3000";
const express = require("express");
const app = express();
const layouts = require("express-ejs-layouts");

//controllerの呼び出し
const homeController = require("./controllers/homeController");

//middlewareの設定
app.set("view engine", "ejs");
app.use(layouts);

app.get("/", (req, res) => {
    res.render("index")
});

app.listen(port, () => {
    console.log(`the server is listening on ${port}`)
});