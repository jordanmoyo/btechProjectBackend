const jwt = require("jsonwebtoken");
const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;

verifyToken = (req, res, next) => {
    let token = req.headers["x-access-token"];

    if(!token){
        return res.status(403).send({
            message: "No token provided!"
        });
    }


    jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
            return res.status(401).send({
                message: "Unauthorized!"
            });
        }
        req.userId = decoded.id;
        next();
    });
};

//==========================IS AN ENTERPRISE =========================

isEnterprise = (req, res, next) => {
    User.findByPk(req.userId).then(user => {
        user.getRoles().then(roles => {
            for (let i = 0; i < roles.length; i++) {
                if (roles[i].name === "Enterprise") {
                    next();
                    return;
                }
            }

            res.status(403).send({
                message: "Require Enterprise Role!"
            });
            return;
        });
    });
};

//=========================IS A LANCE===========================

isLance = (req, res, next) => {
    User.findByPk(req.userId)
        .then(user => {
            user.getRoles()
                .then( roles => {
                    for(let i = 0; i < roles.length; i++) {
                        if(roles[i].name === "Lance"){
                            next();
                            return;
                        }
                    }

                    res.status(403).send({
                        message: "Require Lance"
                    });
                    return;
                });
        });
};

//===========================IS AN ENTERPRISE OR A LANCE ====================

isEnterpriseOrLance = (req, res, next) => {
    User.findByPk(req.userId).then(user => {
        user.getRoles().then(roles => {
            for (let i = 0; i < roles.length; i++) {
                if (roles[i].name === "moderator") {
                    next();
                    return;
                }

                if (roles[i].name === "admin") {
                    next();
                    return;
                }
            }

            res.status(403).send({
                message: "Require Moderator or Admin Role!"
            });
        });
    });
};

const authJwt = {
    verifyToken: verifyToken,
    isEnterprise: isEnterprise,
    isLance: isLance,
    isEnterpriseOrLance: isEnterpriseOrLance
};
module.exports = authJwt;