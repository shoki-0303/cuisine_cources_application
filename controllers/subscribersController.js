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
};

exports.saveSubscriber = (req, res) => {
    let newSubscriber = new Subscriber({
        name: req.body.name,
        email: req.body.email,
        zipCode: req.body.zipCode
    });

    newSubscriber.save((error, document) => {
        if (error) res.send(error);
        let name = document.name;
        res.render("thanks", {name: name});
    });
};