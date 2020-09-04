module.exports = app => {


    const sendEmail = require("../controllers/sendMails.controller");

    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    var router = require("express").Router();

    // send email
    router.post("/", sendEmail.send );

    

    app.use('/api/email', router);
};