const httpStatus = require("http-status-codes");

exports.pageNotFoundError = (req, res) => {
    let errorCode = httpStatus.NOT_FOUND;
    res.status(errorCode);
    res.render("404 error")
};

exports.internalServerError = (req, res) => {
    let errorCode = httpStatus.INTERNAL_SERVER_ERROR;
    res.status(errorCode);
    res.render("500 error")
};