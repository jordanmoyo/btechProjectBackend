module.exports = app => {


    const quote = require("../controllers/quote.controller.js");

    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    var router = require("express").Router();

    // Create a new quote
    router.post("/", quote.create);

    // Retrieve all quote
    router.get("/:userId", quote.findAll);

    // Retrieve a single quote with id
    router.get("/:id", quote.findOne);

    // Update a quote with id
    router.put("/:userId/:quoteId", quote.update);

    // Delete a quote with id
    router.delete("/:userId/:quoteId", quote.delete);

    // Delete all quote
    router.delete("/:userId", quote.deleteAll);

    app.use('/api/quotes', router);
};