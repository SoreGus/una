#!/bin/env node

var DaoPagamento = require('../../db/dao/DaoPagamento');
var Pagamento = require('../../model/Pagamento');

module.exports = function (app) {

    app.post('/api/pagamentos/getAllPagamentos', function (req, res) {
        res.setHeader("Content-Type", "application/json; charset=utf-8");
        res.setHeader('Access-Control-Allow-Origin', '*');
        var daoPagamento = new DaoPagamento();
        daoPagamento.getAllPagamentos(function (err, results) {
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

    app.post('/api/pagamentos/getPagamento/:pagamentoId', function (req, res) {
        res.setHeader("Content-Type", "application/json; charset=utf-8");
        res.setHeader('Access-Control-Allow-Origin', '*');
        var daoPagamento = new DaoPagamento();
        daoPagamento.getPagamentos(req.params.pagamentoId, function (err, results) {
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

    app.post('/api/pagamentos/insertPagamento', function (req, res) {
        res.setHeader("Content-Type", "application/json; charset=utf-8");
        res.setHeader('Access-Control-Allow-Origin', '*');
        var daoPagamento = new DaoPagamento();
        var pagamento = new Pagamento();
        pagamento.listaClientes = req.body.listaClientes;
        pagamento.idEstabelecimento = req.body.idEstabelecimento;
        pagamento.valor = req.body.valor;
        pagamento.estado = 'CRIADO';


        daoPagamento.insertPagamento(pagamento, function (err, results) {
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

    app.post('/api/pagamentos/editaPagamento/:idPagamento', function (req, res) {
        res.setHeader("Content-Type", "application/json; charset=utf-8");
        res.setHeader('Access-Control-Allow-Origin', '*');
        var daoPagamento = new DaoPagamento();

        daoPagamento.editaPagamento(req.params.idPagamento, req, function (err, results) {
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

    app.post('/api/pagamentos/checarPagamento/:clienteId', function (req, res) {
        res.setHeader("Content-Type", "application/json; charset=utf-8");
        res.setHeader('Access-Control-Allow-Origin', '*');
        var daoPagamento = new DaoPagamento();

        var aux;

        daoPagamento.getAllPagamentos(function (err, results) {
            var codeStatus = 0;
            if (err) {
                res.status(500).json({
                    err: err,
                    results: results
                });
            } else {
                testando1 = false;
                for (var i = 0; i < results.length; i++) {
                    var lista = results[i].listaClientes;
                    if (results[i].estado != 'concluido') {
                        console.log(i);
                        for (var j = 0; j < lista.length; j++) {
                            aux = lista[j];
                            console.log(j);
                            if (aux.idCliente == req.params.clienteId && !testando1) {
                                testando1 = true;
                                res.status(200).json({
                                    err: null,
                                    results: results[i]
                                });
                            }


                        }
                    }
                }
                if (!testando1) {
                    res.status(200).json({
                        err: err,
                        results: 'none'
                    });
                }
            }
        });
    });

    app.post('/api/pagamentos/efetuarPagamentoUnitario', function (req, res) {
        res.setHeader("Content-Type", "application/json; charset=utf-8");
        res.setHeader('Access-Control-Allow-Origin', '*');
        var daoPagamento = new DaoPagamento();

        //        daoPagamento.efetuarPagamentoUnitario(req.body.pagamento, req.body.idCliente, function (err, results) {
        //            var codeStatus = 0;
        //            if (err) {
        //                res.status(500).json({
        //                    err: err,
        //                    results: results
        //                });
        //            } else {
        //                res.status(200).json({
        //                    err: err,
        //                    results: results
        //                });
        //            }
        //        });
    });
}