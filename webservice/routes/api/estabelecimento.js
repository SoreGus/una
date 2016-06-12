#!/bin/env node

module.exports = function (app) {

    app.post('/api/estabelecimento/add', function (req, res) {
        res.setHeader("Content-Type", "application/json; charset=utf-8");
        res.setHeader('Access-Control-Allow-Origin', '*');

        var daoEstabelecimento = new DaoEstabelecimento();

        daoEstabelecimento.add(req.body.estabelecimento,function(result){
            res.send(result);
        });
    });

    app.post('/api/estabelecimento/recuperar', function (req, res) {
        res.setHeader("Content-Type", "application/json; charset=utf-8");
        res.setHeader('Access-Control-Allow-Origin', '*');

        var daoEstabelecimento = new DaoEstabelecimento();

        daoEstabelecimento.recuperar(req.body.idBeacon,function(result){
            res.send(result);
        });
    });

    app.post('/api/estabelecimento/atualizar', function (req, res) {
        res.setHeader("Content-Type", "application/json; charset=utf-8");
        res.setHeader('Access-Control-Allow-Origin', '*');

        var daoEstabelecimento = new DaoEstabelecimento();

        daoEstabelecimento.atualizar(req.body.estabelecimento,function(result){
            res.send(result);
        });
    });
    
}