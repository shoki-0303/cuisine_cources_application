const port = "3000";
const express = require("express");
const app = express();
const layouts = require("express-ejs-layouts");

//controllerの呼び出し
const homeController = require("./controllers/homeController");
const userController = require("./controllers/userController");
const errorController = require("./controllers/errorController");

//middlewareの設定
app.set("view engine", "ejs");
app.use(layouts);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", homeController.renderIndexPage);
app.get("/signup", userController.renderSignUpPage);
app.post("/signup", userController.resisterUserData);

//エラーハンドリング
app.use(errorController.pageNotFoundError);
app.use(errorController.internalServerError);

app.listen(port, () => {
    console.log(`the server is listening on ${port}`)
});