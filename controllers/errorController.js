const httpStatus = require("http-status-codes");

exports.pageNotFoundError = (req, res) => {
    let errorCode = httpStatus.NOT_FOUND;
    res.status(errorCode);
    res.render("404")
};

exports.internalServerError = (err, req, res, next) => {
    let errorCode = httpStatus.INTERNAL_SERVER_ERROR;
    console.error(err.stack)
    res.status(errorCode);
    res.send("500 error")
};