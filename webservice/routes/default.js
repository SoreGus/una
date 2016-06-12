#!/bin/env node

module.exports = function (app) {
    app.all('/404', new Token().acessoLivre, function (req, res) {
        res.setHeader("Content-Type", "application/json; charset=utf-8");
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.status(404);
        res.send("Not Found");
    });
}