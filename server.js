const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
    
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204

    // origin: "http://localhost:8081" || "http://localhost:8082"
};



app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

//===================DB========================//


const db = require("./models"); //watch for errors
const Role = db.role;
const Bill_Item = db.bill_items;
const Quote_Item = db.quote_items;

// db.sequelize.sync({force: true})
//     .then (() => {
//         console.log('Drop and Resync Db');
//         initial();
// });


//===================DB========================//

//simple route

//=================ROUTES=============================
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);
require("./routes/bill.routes")(app);
require("./routes/quote.routes")(app);
require("./routes/bill_items.routes")(app);
require("./routes/quote_items.routes")(app);
//=================ROUTES=============================

//=============== in dev mode============================
if (process.env.NODE_ENV === 'development') {
    app.get("/", (req, res) => {
        res.json({ message: "Welcome to JORDANS application." });
    });
}

//====================lets setup production mode==========

if(process.env.NODE_ENV === 'production'){
    //lets set our static folder for the the frontEnd

    app.use(express.static(__dirname + '/public/'))

    //now lets handle the SPA 
    app.get(/.*/, (res, req) => res.sendFile(__dirname + '/public/index.html'))
}

// lets set a port that shall listern to our requests

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
});


//======================DB==========================//

function initial() {
    Role.create({
        id: 1,
        name: "Lance"
    });

    Role.create({
        id: 2,
        name: "Enterprise"
    });

    // ======================================
    Bill_Item.create({
        id: 1,
        bill_item_name: "HOSTING",
        bill_item_price: 150000.00,
        bill_item_description: "to make the software available online"
    });

    Bill_Item.create({
        id: 4,
        bill_item_name: "DATABAES STORAGE SPACE",
        bill_item_price: 1000.00,
        bill_item_description: "to make the software available online"
    });

    Bill_Item.create({
        id: 2,
        bill_item_name: "LOGO DESIGN",
        bill_item_price: 15000.00,
        bill_item_description: "the creation of the logos to be used in the application"
    });

    Bill_Item.create({
        id: 3,
        bill_item_name: "NUMBER OF ENGINEERS",
        bill_item_price: 55000.00,
        bill_item_description: "to make the software available online"
    });


    // ======================================
    Quote_Item.create({
        id: 1,
        quote_item_name: "NUMBER OF ENGINEERS",
        quote_item_price: 50000.00,
        quote_item_description: "to make the software available online"
    });

    Quote_Item.create({
        id: 2,
        quote_item_name: "HOSTING",
        quote_item_price: 50000.00,
        quote_item_description: "to make the software available online"
    });

}

//======================DB=========================//