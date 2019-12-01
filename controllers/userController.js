exports.renderSignUpPage = (req, res) => {
    res.render("signup");
};

exports.resisterUserData = (req, res) => {
    var userName = req.body.name;
    res.render("thanks", {name: userName});
};