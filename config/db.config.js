if (process.env.NODE_ENV === 'production') {
    module.exports = {
        // mysql://bc579efc935773:f587dada@eu-cdbr-west-03.cleardb.net/heroku_ee594c7305c52d5?reconnect=true
        HOST: "eu-cdbr-west-03.cleardb.net",
        USER: "bc579efc935773",
        PASSWORD: "f587dada",
        DATABASE: "heroku_ee594c7305c52d5", 
        dailect: "mysql",  
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    };
}
if (process.env.NODE_ENV === 'Production') {
    module.exports = {
        // mysql://b60c8357edc374:08f15786@eu-cdbr-west-03.cleardb.net/heroku_8d509f04b2d1a63?reconnect=true
        HOST: "eu-cdbr-west-03.cleardb.net",
        USER: "b60c8357edc374",
        PASSWORD: "08f15786",
        DATABASE: "heroku_8d509f04b2d1a63",
        dailect: "mysql",
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    };
}
else{
    module.exports = {
        HOST: "localhost",
        USER: "root",
        PASSWORD: "password",
        DATABASE: "dbtest",
        dailect: "mysql",
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    };
}
