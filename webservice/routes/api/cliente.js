#!/bin/env node

module.exports = function (app) {

    app.post('/api/cliente/add', function (req, res) {
        res.setHeader("Content-Type", "application/json; charset=utf-8");
        res.setHeader('Access-Control-Allow-Origin', '*');

        var daoCliente = new DaoCliente();

        daoCliente.add(req.body.cliente,function(result){
            res.send(result);
        });
    });

    app.post('/api/cliente/recuperar', function (req, res) {
        res.setHeader("Content-Type", "application/json; charset=utf-8");
        res.setHeader('Access-Control-Allow-Origin', '*');

        var daoCliente = new DaoCliente();

        daoCliente.recuperar(req.body.id,function(result){
            res.send(result);
        });
    });

    app.post('/api/cliente/recuperarByFacebookID', function (req, res) {
        res.setHeader("Content-Type", "application/json; charset=utf-8");
        res.setHeader('Access-Control-Allow-Origin', '*');

        var daoCliente = new DaoCliente();

        daoCliente.recuperarByFacebookID(req.body.facebookId,function(result){
            res.send(result);
        });
    });

    app.post('/api/cliente/atualizar', function (req, res) {
        res.setHeader("Content-Type", "application/json; charset=utf-8");
        res.setHeader('Access-Control-Allow-Origin', '*');

        var daoCliente = new DaoCliente();

        daoCliente.atualizar(req.body.cliente,function(result){
            res.send(result);
        });
    });
    
}