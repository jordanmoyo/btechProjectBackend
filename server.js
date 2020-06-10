const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

//===================DB========================//


const db = require("./models"); //watch for errors
const Role = db.role;

db.sequelize.sync({force: true})
    .then (() => {
        console.log('Drop and Resync Db');
        initial();
});


//===================DB========================//

//simple route
app.get("/",(req, res) => {
    res.json({message:"Welcome to JORDANS application."});
});

//=================ROUTES=============================
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);
//=================ROUTES=============================


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

}

//======================DB=========================//