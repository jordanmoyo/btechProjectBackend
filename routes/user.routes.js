const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");

module.exports =  (app) => {
    app.use( (req, res, next) => {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get("/api/test/all", controller.allAccess);

    app.get(
        "/api/test/lance",
        [authJwt.verifyToken],
        controller.LanceBoard
    );

    app.get(
        "/api/test/enterprise",
        [authJwt.verifyToken, authJwt.isEnterprise],
        controller.EnterpriseBoard
    );

    // app.get(
    //     "/api/test/admin",
    //     [authJwt.verifyToken, authJwt.isAdmin],
    //     controller.adminBoard
    // );
};