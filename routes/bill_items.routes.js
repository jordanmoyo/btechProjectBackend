module.exports = app => {


    const bill_items = require("../controllers/bill_items.controller.js");

    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    var router = require("express").Router();

    // Retrieve all Bill items/ components
    router.get("/", bill_items.findAllBillItems);

    app.use('/api/bill_items', router);
};