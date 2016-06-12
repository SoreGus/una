#!/bin/env node

var mongodb = require('mongodb');

function DaoCartao() {
    this._connection = dbCon[0];

    this.getAllCartoes = function (done) {
        this._connection.collection('cartao').find().toArray(function (err, results) {
            if (err) {
                done(err, 'Houve um erro no retorno dos cartão');
            } else {
                done(null, results);
            }
        });
    }

    this.getCartoes = function (cartaoId, done) {
        this._connection.collection('cartao').findOne({
            _id: new mongodb.ObjectID(cartaoId)
        }, function (err, results) {
            if (err) {
                done(err, 'Houve um erro no retorno do cartão');
            } else if (!results) {
                done(null, 'Cartão não localizado');
            } else {
                done(null, results);
            }
        });
    }


    this.insertCartao = function (cartao, done) {
        this._connection.collection('cartao').insert(cartao, function (err, results) {
            if (err) {
                done(err, 'Houve um erro na inclusão do cartão.');
            } else {
                done(null, 'Cartão incluído com sucesso!');
            }
        });
    }
}


module.exports = DaoCartao;