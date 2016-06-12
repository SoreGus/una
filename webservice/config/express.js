#!/bin/env node

module.exports = function () {
    var express = require('express');

    var app = express();

    app.use(express.static('./webapp'));
    //    app.use(express.static(__dirname + "/webapp"));

    var bodyParser = require('body-parser');

    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.use(bodyParser.json());

    /* Pensamento
     Acho que algumas coisas, principalemnte o DAO poderia ser instanciado so dentro das rotas, assim poupa espaço para não instanciar coisas que não serão utilizadas.... Ainda estou trabalhando isso na minha cabeça. */

    // Banco de dados
    require('../db/conexao.js')();

    // Instanciação dos models
    Usuario = require("../model/Usuario.js");

    // Ativação ou instanciação das bibliotecas
    //    mhash = require("mhash");
    uuid = require('node-uuid');
    valida = require("../library/Valida.js");
    Email = require("../library/Email.js");
    require("../library/Token.js");

    // Instanciação dos DAOs
    DaoUsuario = require("../db/dao/usuario.js");
    DaoEstabelecimento = require("../db/dao/DaoEstabelecimento.js");
    DaoCliente = require("../db/dao/DaoCliente.js");

    // Rotas
    require('../routes/default.js')(app);
    require('../routes/api/pagamento.js')(app);
    require('../routes/api/usuario.js')(app);
    require('../routes/api/estabelecimento.js')(app);
    require('../routes/api/cliente.js')(app);
    require('../routes/api/teste.js')(app);

    require('../routes/api/cartao.js')(app);
    return app;
};