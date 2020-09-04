module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users",{
        username : {
            type : Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        // id: {
        //     type: Sequelize.BIGINT,//.UNSIGNED,
        //     primaryKey: true,
        //     autoIncrement: true
        // },
    });

    return User;
};