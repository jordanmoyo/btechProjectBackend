module.exports = app => {


    const quote_items = require("../controllers/quote_items.controller.js");

    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    var router = require("express").Router();

    // Retrieve all quote items/ components
    router.get("/", quote_items.findAllQuoteItems);

    router.get("/", quote_items.findAllQuoteItems);

    app.use('/api/quote_items', router);
};