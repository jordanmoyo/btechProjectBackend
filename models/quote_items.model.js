module.exports = (sequelize, Sequelize) => {
    const Quote_Item = sequelize.define("quote_items", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        quote_item_name: {
            type: Sequelize.STRING
        },
        quote_item_price: {
            type: Sequelize.FLOAT
        },
        quote_item_description: {
            type: Sequelize.TEXT
        }
    });

    return Quote_Item;
};