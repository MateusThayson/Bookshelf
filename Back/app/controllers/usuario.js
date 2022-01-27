const Usuario = require("../models/usuario");
const viewUsuario = require("../views/usuario");
const bcrypt = require("bcrypt");

module.exports.cadastrarUsuario = function(req, res){
    let usuario = {
        nome: req.body.nome,
        email: req.body.email,
        senha: bcrypt.hashSync(req.body.senha, 10),
    }

    let promise = Usuario.create(usuario);
    promise.then(function(usuario){
        res.status(200).json(viewUsuario.render(usuario));
    }).catch(function(error){
        res.status(400).json({mensagem: "Não foi possível cadastrar o usuário."});
    })
}