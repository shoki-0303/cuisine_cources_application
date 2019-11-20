const httpStatus = require("http-status-codes");

exports.pageNotFoundError = (req, res) => {
    let errorCode = httpStatus.NOT_FOUND;
    res.status(errorCode);
    res.send(`${errorCode}| the page does not exist`)
};

exports.internalServerError = (err, req, res) => {
    let errorCode = httpStatus.INTERNAL_SERVER_ERROR;
    console.error(error.stack);
    res.status(errorCode);
    res.send("500 error")
};