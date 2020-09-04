module.exports = (sequelize, Sequelize) => {
    const Bill = sequelize.define("bills", {
        billName: {
            type: Sequelize.STRING,
            // unique: true
        },
         
    });

    return Bill;
};