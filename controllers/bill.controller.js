const db = require("../models");
const { billLineItem } = require("../models");
const Bill = db.bills;
const Bill_Item = db.bill_items;
const Bill_Line_item = db.billLineItem;
const Quote_line_Item = db.quoteLineItem;
const Op = db.Sequelize.Op;

// Create and Save a new bill
exports.create = (req, res) => {

    if (!req.body.billName && req.body.bill_line_items) {
        res.status(400).send({
            message: "A bill must have a valid name and atleast one bill item!"
        });
        return;
    }

    // Create a bill
    const bill = {
        billName: req.body.billName,
        userId: req.body.userId,
    };

    console.log(req.body)

    const arr =  req.body.bill_line_items;
    const arrLength = arr.length;

    //=======================================================================================
    
    Bill.create(bill)
        .then(billData => {
            const billID = billData.dataValues.id;
            console.log('billId = ' + billID);

            if (req.body.bill_line_items) {
                // const arr = req.body.bill_line_items;
                // const arrLength = arr.length;
                // console.log(arrLength, arr);

                
                for( let i = 0; i < arrLength; i++ ){
                    var eachItem = arr[i].bill_item_name;

                    console.log(eachItem);

                    Bill_Item.findAll({
                        where: {
                            bill_item_name: eachItem
                            
                        }
                    })
                        .then(billItem => {
                           // console.log('HERE IS THE BILL DATA = '+ billData[0]);
                            var bill_itemId = billItem[0].id;
                            console.log('bill_itemId = ' + bill_itemId);

                            billData.setBill_items(billItem)
                                .then(() => { 
                                    Bill_Line_item.update(
                                        {quantity: arr[i].quantity},
                                        {   where: {
                                                    bill_itemId : bill_itemId,
                                                    billId: billID 
                                            }
                                        }
                                    )
                                        .then(result =>{
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

// Retrieve all BILLS from the database.  
exports.findAll = (req, res) => {

    const userId = req.params.userId;
    //var condition = billName ? { billName: { [Op.like]: `%${billName}%` } } : null;

    Bill.findAll({
        where: { userId: userId } ,
        include: [
            {
                model : Bill_Item,
               
            }
        ] 
     })
        .then(data => {
            
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Some error occured while creating the bill please try again!'
            });
        });

};



// Find a single BILLS with an id================================================
exports.findOne = (req, res) => {

    const id = req.params.id;
    
    Bill.findByPk(id)
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message : 'The bill with id '+id+' dont exist' 
        });
    });

};

//=================================================================================


// Update a BILLS by the id in the request
exports.update = (req, res) => {
    //GETTING THE userID AND billID FROM THE REQUEST PARAMS(PARAMETERS)
    const userId = req.params.userId;
    const billId = req.params.billId;

    // Creating the billname to be updated 
    const bill = {
        billName: req.body.billName,
    };

    Bill.update(bill, {
        where: { 
            id: billId,
            userId: userId,
        }
    })
        .then(num => {

            if(req.body.bill_line_items){
                const arr = req.body.bill_line_items;
                const arrLength = arr.length;
                for(let i = 0; i < arrLength; i++){

                    var bill_itemId = arr[i].bill_itemId;
                    Bill_Line_item.update({ quantity: arr[i].quantity }, {
                        where : {
                           bill_itemId  : bill_itemId,
                            billId  : billId,
                        }
                     })
                        .then(rowsUpdated =>
                            {
                                if(i === (arrLength - 1)){
                                    res.send({message : rowsUpdated + ' Row(s) were updated succesfully'})
                                }
                            } 
                        )
                    
                }
            }else{

                if (num => 1){
                res.send({
                    message: 'bill updated succefully!'
                });
                }else{
                res.send({
                    message: 'Bill not updated may because it was not found!'
                });
            }

            }

            
        })
        .catch(err => {
            res.status(500).send({
                message : 'Error updating Bill'
            });
        });

};

// Delete a BILLS with the specified id in the request
exports.delete = (req, res) => {

    const billId = req.params.billId;
    const userId = req.params.userId;

    Bill.destroy({
        where: { 
            id: billId,
            userId : userId
        }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Bill was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Bill. Maybe Bill was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Bill"
            });
        });

};

// Delete all BILL from the database.
exports.deleteAll = (req, res) => { 

    const userId = req.params.userId;

    Bill.destroy({
        where: { userId: userId},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Bills were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Bills."
            });
        });
};

// Find all created BILLS
// exports.findAllPublished = (req, res) => {

// };