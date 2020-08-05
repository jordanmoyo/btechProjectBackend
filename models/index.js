const config = require("../config/db.config");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
    config.DATABASE,
    config.USER,
    config.PASSWORD,
    {
        host             : config.HOST,
        dialect          : config.dailect,
        operatorsAliases : false,

        pool : {
            max     : config.pool.max,
            min     : config.pool.min,
            acquire : config.pool.idle
        }
    }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);


db.role.belongsToMany(db.user, {
    through    : "user_roles",
    foreignKey : "roleId",
    otherKey   : "roleId"
});

db.user.belongsToMany(db.role, {
    through    : "user_roles",
    foreignKey : "userId",
    otherKey   : "roleId"
});

//=====================================CREATING A MANY TO MANY RELATION-SHIP=========================================

db.bills = require("../models/bills.model.js")(sequelize, Sequelize);
db.bill_items = require("../models/bill_items.model.js")(sequelize, Sequelize);
// db.bill_line_item = require("../models/bill_line_item.model.js")(sequelize, Sequelize);
const BillLineItem = sequelize.define("bill_line_item", {
    quantity: {
        type: Sequelize.INTEGER
    },

});

db.bill_items.belongsToMany(db.bills, {
    through     : "bill_line_item",
    foreignKey  : "bill_itemId",
    otherKey    : "bill_itemId",
    
});

db.bills.belongsToMany(db.bill_items, {
    through     : "bill_line_item",
    foreignKey  : "billId",
    otherKey    : "bill_itemId"
});


db.quotes = require("../models/quotes.model.js")(sequelize, Sequelize);
db.quote_items = require("../models/quote_items.model.js")(sequelize, Sequelize);
// const quote_line_item = require("../models/quote_line_item.model.js")(sequelize, Sequelize);

const QuoteLineItem = sequelize.define("quote_line_item", {
    quantity: {
        type: Sequelize.INTEGER
    },

});

db.quote_items.belongsToMany(db.quotes, {
    through: "quote_line_item",
    foreignKey: "quote_itemId",
    otherKey: "quote_itemId"
});

db.quotes.belongsToMany(db.quote_items, {
    through: "quote_line_item",
    foreignKey: "quoteId",
    otherKey: "quote_itemId"
}); 

//=====================================CREATING A MANY TO MANY RELATION-SHIP=========================================

// ====================================CREATING A MANY TO ONE RELATIONSHIP===========================================
db.user.hasMany(db.bills, {as: "bills" });  

db.bills.belongsTo(db.user, {
    foreignKey  : "userId",
    as  :  "user"
});

db.user.hasMany(db.quotes, { as: "quotes" });

db.quotes.belongsTo(db.user, {
    foreignKey: "userId",
    as: "user"
});


// ====================================CREATING A MANY TO ONE RELATIONSHIP===========================================

db.quoteLineItem = QuoteLineItem;
db.billLineItem = BillLineItem;
db.ROLES = ["Lance", "Enterprise"];

module.exports = db;