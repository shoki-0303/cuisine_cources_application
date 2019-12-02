const Subscriber = require("../models/subscriber");

exports.getAllsubscribers = (req, res, next) => {
    Subscriber.find({}, (error, subscribers) => {
        if (error) next(error);
        req.data = subscribers;
        next();
    });
};

exports.getSubscriptionPage = (req, res) => {
    res.render("contact")
}