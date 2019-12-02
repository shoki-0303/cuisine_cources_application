const port = "3000";
const express = require("express");
const app = express();
const layouts = require("express-ejs-layouts");
const mongoose = require("mongoose");

//DBの接続
mongoose.connect("mongodb://localhost:27017/recipe_db", {useNewUrlParser: true});
const db = mongoose.connection;
db.once("open", () => {
    console.log("Successfully connected to mongoDB")
});

//controllerの呼び出し
const homeController = require("./controllers/homeController");
const userController = require("./controllers/userController");
const errorController = require("./controllers/errorController");
const subscriberController = require("./controllers/subscribersController");

//middlewareの設定
app.set("view engine", "ejs");
app.use(layouts);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", homeController.renderIndexPage);
app.get("/signup", userController.renderSignUpPage);
app.post("/signup", userController.resisterUserData);
app.get("/subscribers", subscriberController.getAllsubscribers, (req, res, next) => {
    res.render("subscribers",{subscribers: req.data})
});
app.get("/contact",subscriberController.getSubscriptionPage);
app.post("/contact", subscriberController.saveSubscriber);

//エラーハンドリング
app.use(errorController.pageNotFoundError);
app.use(errorController.internalServerError);

app.listen(port, () => {
    console.log(`the server is listening on ${port}`)
});