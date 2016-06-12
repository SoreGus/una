#!/bin/env node

var mongodb = require('mongodb');

function DaoPagamento() {
    this._connection = dbCon[0];

    this.getAllPagamentos = function (done) {
        this._connection.collection('pagamento').find().toArray(function (err, results) {
            if (err) {
                done(err, 'Houve um erro no retorno dos pagamentos');
            } else {
                done(null, results);
            }
        });
    }

    this.getPagamentos = function (pagamentoId,done) {
        this._connection.collection('pagamento').findOne({
            _id: new mongodb.ObjectID(pagamentoId)
        }, function (err, results) {
            if (err) {
                done(err, 'Houve um erro no retorno do pagamento');
            } else if (!results) {
                done(null, 'Pagamento não localizada');
            } else {
                done(null, results);
            }
        });
    }


    this.insertPagamento = function (pagamento, done) {
        this._connection.collection('pagamento').insert(pagamento, function (err, results) {
            if (err) {
                done(err, 'Houve um erro na inclusão do pagamento.');
            } else {
                done(null, 'Pagamento incluída com sucesso!');
            }
        });
    }

    this.editaPagamento = function (pagamentoId, req, done) {
        this._connection.collection('pagamento').findAndModify({
                _id: new mongodb.ObjectID(pagamentoId)
            }, [['_id', 'asc']], {
                "$set": {
                    listaClientes: JSON.parse(req.body.listaClientes),
                    idEstabelecimento: req.body.idEstabelecimento,
                    valor: req.body.valor,
                    estado: req.body.estado
                }
            },
            function (err, doc) {
                if (err) {
                    done(err, 'Houve um erro na atualização da pergunta.');
                } else {
                    done(null, 'Pergunta atualizada com sucesso!');
                }
            }
        );
    }

    this.efetuarPagamentoUnitario = function (pagamento,clienteId,done) {

        var listaClientesAux = JSON.parse(pagamento).listaClientes;

        for(var i = 0;i < listaClientesAux.length;i++){
            if(listaClientesAux[i].id == clienteId){
                listaClientesAux[i].pago = true;
            }
        }

        this._connection.collection('pagamento').findAndModify({
                _id: new mongodb.ObjectID(pagamento._id)
            }, [['_id', 'asc']], {
                "$set": {
                    listaClientes: listaClientesAux
                }
            },
            function (err, doc) {
                if (err) {
                    done(err, 'Houve um erro.');
                } else {
                    done(null, 'Sucesso!');
                }
            }
        );
    }

}


module.exports = DaoPagamento;