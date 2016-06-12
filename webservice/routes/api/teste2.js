#!/bin/env node

module.exports = function (app) {
    app.get('/api/teste2/:id', function (req, res) {
        res.setHeader("Content-Type", "application/json; charset=utf-8");
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.send("1");
        console.log("***** ID DO TESTE 2: " + req.params.id);
    });
}