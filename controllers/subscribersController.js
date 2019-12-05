const Subscriber = require("../models/subscriber");

exports.getAllsubscribers = (req, res, next) => {
    //promiseオブジェクトを返す
    Subscriber.find({}).exec()
    .then((subscribers) => {
        res.render("subscribers", {subscribers: subscribers});
    })
    .catch((error) => {
        console.log(error);
        res.render("errors/500")
    })
    .then(() => {
        console.log("promise complete")
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

    newSubscriber.save()
    .then((document) => {
        let name = document.name;
        res.render("thanks", {name: name});
    })
    .catch(() => {
        if (error) res.send(error)
    })
};