const db = require("../models");
const Bill = db.bills;
const Bill_Item = db.bill_items;
const Op = db.Sequelize.Op;

exports.findAllBillItems = (req, res) => {

    Bill_Item.findAll({

    })
        .then(data => {

            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Some error occured while geeting the different bill components, please try again!'
            });
        });

};