const db = require("../models");
const Quote = db.quotes;
const Quote_Item = db.quote_items;
const Op = db.Sequelize.Op;

exports.findAllQuoteItems = (req, res) => {

    Quote_Item.findAll({

    })
        .then(data => {

            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Some error occured while geeting the different Quote components, please try again!'
            });
        });

};