#!/bin/env node

var DaoCartao = require('../../db/dao/DaoCartao');
var Cartao = require('../../model/Cartao');

module.exports = function (app) {

    app.post('/api/cartao/getAllCartoes', function (req, res) {
        res.setHeader("Content-Type", "application/json; charset=utf-8");
        res.setHeader('Access-Control-Allow-Origin', '*');
        var daoCartao = new DaoCartao();
        daoCartao.getAllCartoes(function (err, results) {
            var codeStatus = 0;
            if (err) {
                res.status(500).json({
                    err: err,
                    results: results
                });
            } else {
                res.status(200).json({
                    err: err,
                    results: results
                });
            }
        });
    });

    app.post('/api/cartao/getCartao/:cartaoId', function (req, res) {
        res.setHeader("Content-Type", "application/json; charset=utf-8");
        res.setHeader('Access-Control-Allow-Origin', '*');
        var daoCartao = new DaoCartao();
        daoCartao.getCartoes(req.params.cartaoId, function (err, results) {
            var codeStatus = 0;
            if (err) {
                res.status(500).json({
                    err: err,
                    results: results
                });
            } else {
                res.status(200).json({
                    err: err,
                    results: results
                });
            }
        });
    });

    app.post('/api/cartao/insertCartao', function (req, res) {
        res.setHeader("Content-Type", "application/json; charset=utf-8");
        res.setHeader('Access-Control-Allow-Origin', '*');
        var daoCartao = new DaoCartao();
        var cartao = new Cartao();
        cartao.idCliente = req.body.idCliente;
        cartao.numero = req.body.numero;
        cartao.data = req.body.data;
        cartao.numeroValidacao = req.body.numeroValidacao;

        daoCartao.insertCartao(cartao, function (err, results) {
            var codeStatus = 0;
            if (err) {
                res.status(500).json({
                    err: err,
                    results: results
                });
            } else {
                res.status(200).json({
                    err: err,
                    results: results
                });
            }
        });
    });
}