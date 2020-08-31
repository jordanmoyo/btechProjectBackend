const db = require("../models");

const Quote = db.quotes;
const Quote_Item = db.quote_items;
const Quote_Line_item = db.quoteLineItem;

const Op = db.Sequelize.Op;

// Create and Save a new Quote
exports.create = (req, res) => {

    if (!req.body.quoteName && req.body.quote_line_items) {
        res.status(400).send({
            message: "A Quote must have a valid name and atleast one Quote item!"
        });
        return;
    }

    // Create a Quote
    const quote = {
        quoteName: req.body.quoteName,
        userId: req.body.userId,
    };

    const arr = req.body.quote_line_items;
    const arrLength = arr.length;

    //=======================================================================================
    console.log(quote)
    Quote.create(quote)
        .then(quoteData => {
            const quoteID = quoteData.dataValues.id;
            console.log('quoteId = ' + quoteID);

            if (req.body.quote_line_items) {
                
                for (let i = 0; i < arrLength; i++) {
                    var eachItem = arr[i].quote_item_name;

                    console.log(eachItem);

                    Quote_Item.findAll({
                        where: {
                            quote_item_name: eachItem
                        }
                    })
                        .then(quoteItem => {
                            console.log('HERE IS THE quote DATA = ' + quoteData.dataValues);
                            var quote_itemId = quoteItem[0].id;
                            console.log('quote_itemId = ' + quote_itemId);

                            quoteData.setQuote_items(quoteItem)
                                .then(() => {
                                    Quote_Line_item.update(
                                        { quantity: arr[i].quantity },
                                        {
                                            where: {
                                                quote_itemId: quote_itemId,
                                                quoteId: quoteID
                                            }
                                        }
                                    )
                                        .then(result => {
                                            if (i === (arrLength - 1)) {
                                                // res.send(result)

                                                res.send({ message: "Item registered succefully!" })

                                            }
                                        }


                                        )
                                });
                        });
                }

            }


        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });

    //=======================================================================================

};

// Retrieve all quote from the database.
exports.findAll = (req, res) => {

    const userId = req.params.userId;
    

    Quote.findAll({
        where: { userId: userId },
        include: [
            {
                model: Quote_Item,

            }
        ]
    })
        .then(data => {

            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Some error occured while creating the quote please try again!'
            });
        });

};



// Find a single quote with an id================================================
exports.findOne = (req, res) => {

    const id = req.params.id;

    Quote.findByPk(id)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: 'The quote with id ' + id + ' dont exist'
            });
        });

};

//=================================================================================


// Update a quote by the id in the request
exports.update = (req, res) => {
    //GETTING THE userID AND quoteID FROM THE REQUEST PARAMS(PARAMETERS)
    const userId = req.params.userId;
    const quoteId = req.params.quoteId;

    // Creating the quotename to be updated 
    const quote = {
        quoteName: req.body.quoteName,
    };

    Quote.update(quote, {
        where: {
            id: quoteId,
            userId: userId,
        }
    })
        .then(num => {

            if (req.body.quote_line_items) {
                const arr = req.body.quote_line_items;
                const arrLength = arr.length;
                for (let i = 0; i < arrLength; i++) {

                    var quotel_itemId = arr[i].quote_itemId;
                    Quote_Line_item.update({ quantity: arr[i].quantity }, {
                        where: {
                            quote_itemId: quote_itemId,
                            quoteId: quoteId,
                        }
                    })
                        .then(rowsUpdated => {
                            if (i === (arrLength - 1)) {
                                res.send({ message: rowsUpdated + ' Row(s) were updated succesfully' })
                            }
                        }
                        )

                }
            } else {

                if (num => 1) {
                    res.send({
                        message: 'Quote updated succefully!'
                    });
                } else {
                    res.send({
                        message: 'Quote not updated may because it was not found!'
                    });
                }

            }


        })
        .catch(err => {
            res.status(500).send({
                message: 'Error updating quote'
            });
        });

};

// Delete a quote with the specified id in the request
exports.delete = (req, res) => {

    const quoteId = req.params.quoteId;
    const userId = req.params.userId;

    Quote.destroy({
        where: {
            id: quoteId,
            userId: userId
        }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Quote was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Quote. Maybe Quote was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Quote"
            });
        });

};

// Delete all quote from the database.
exports.deleteAll = (req, res) => {

    const userId = req.params.userId;

    Quote.destroy({
        where: { userId: userId },
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Quote were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred when deleting all Quote."
            });
        });
};

