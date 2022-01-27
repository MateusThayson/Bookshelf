const controller = require("../controllers/usuario")
const controllerAuth = require("../controllers/auth");

module.exports = function(app){
    app.post("/usuarios", controller.cadastrarUsuario); 
    app.post("/login", controllerAuth.logar);  
}