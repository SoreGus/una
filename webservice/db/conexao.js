#!/bin/env node

dbCon = new Array();

module.exports = function () {
    require('mongodb').MongoClient.connect("mongodb://admin:3BnjuSWiMGSA@127.4.165.130:27017/app", function (err, conn) {
        //require('mongodb').MongoClient.connect("mongodb://localhost:27017/app", function (err, conn) {
        if (err) {
            console.log('Houve um erro na conexão com o BD. Erro: ' + err);
            dbCon[0] = undefined;
        } else {
            console.log('Conexão com o BD criada com sucesso!');
            dbCon[0] = conn;
        }
    });
    ObjectId = require('mongodb').ObjectID;
}