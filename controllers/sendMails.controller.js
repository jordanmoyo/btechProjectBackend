const nodeMailer = require("nodemailer");
const multer = require("multer")
var express = require("express");
const appExpress = express();

let transporter = nodeMailer.createTransport({
    service: 'gmail',
    secure: false,
    auth: {
        user: "lordmoyojordan@gmail.com",
        pass: "LoicJordan2019."
    },

});

exports.send = (req, res) => {

    var path = require('path');


    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, express.static(__dirname + '/public/uploads/'));
        },
        filename: function (req, file, cb) {
            cb(null, file.originalname);
        }
    });

    var upload = multer({ 
        dest: express.static(__dirname + '/public/uploads/'),
        storage: storage,
        limits: { fileSize: 1024 * 1024 * 5 }
     })

    appExpress.post('/pdf', upload.single('pdf'), (req, res) =>{
        try {
            res.send(req.file);
        } catch (err) {
            res.send(400);
        }
    
        // req.file is the `avatar` file
        // req.body will hold the text fields, if there were any
    })




    var message = {
        from: "lordmoyojordan@gmail.com",
        to: "wankosonia7@gmail.com",
        subject: "Message title",
        text: "from kmer free lance",
        html: "<p>HTML version of the message</p>",
        attachments: {  
            // file on disk as an attachment
            filename: 'text3.txt',
            path: '/path/to/file.txt' // stream this file
        },
    };


    transporter.sendMail(message, (err, data) => {
        if (err) {
            console.log("Error Occurs", err);
        } else {
            console.log('Email send succesfully')
        }
    });
}