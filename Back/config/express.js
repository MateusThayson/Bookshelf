const express = require('express');
const bodyParser = require("body-parser");

const routerUsuarios = require("../app/routes/usuarios");

module.exports = function(){
    let app = express();

    app.set("port", 8393);
    app.use(express.static("./public"));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended : false }));

    routerUsuarios(app);
    
    return app;
};