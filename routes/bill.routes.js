module.exports = app => {


    const bill = require("../controllers/bill.controller.js");

    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    var router = require("express").Router();

    // Create a new Bill
    router.post("/", bill.create);

    // Retrieve all Bill
    router.get("/:userId", bill.findAll);

    // Retrieve a single Bill with id
    router.get("/:id", bill.findOne);

    // Update a Bill with id
    router.put("/:userId/:billId", bill.update);

    // Delete a Bill with id
    router.delete("/:userId/:billId", bill.delete);

    // Delete all Bill
    router.delete("/:userId", bill.deleteAll);

    app.use('/api/bills', router);
};