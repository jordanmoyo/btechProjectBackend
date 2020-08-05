module.exports = (sequelize, Sequelize) => {
    const Quote = sequelize.define("quotes", {
        quoteName: {
            type: Sequelize.STRING
        }
    });

    return Quote;
};