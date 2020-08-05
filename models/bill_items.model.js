module.exports = (sequelize, Sequelize) => {
    const Bill_Item = sequelize.define("bill_items", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        bill_item_name: {
            type: Sequelize.STRING
        },
        bill_item_price: {
            type: Sequelize.FLOAT
        },
        bill_item_description: {
            type: Sequelize.TEXT
        }
    });

    return Bill_Item;
};