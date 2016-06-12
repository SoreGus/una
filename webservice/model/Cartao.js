#!/bin/env node

function Cartao() {
    this.id = undefined;

    this.idCliente = undefined;
    this.dataExp = undefined;
    this.numero = undefined;
    this.numValidacao = undefined;

    this.jsonString = function () {

        var j = JSON.stringify(this);

        return j;
    }

    this.json = function (j) {
        var ok = false;
        if (typeof j == typeof "x") {
            j = JSON.parse(j);
            ok = true;
        } else if (typeof j == typeof new Object) {
            ok = true;
        } else {
            ok = false;
        }
        if (ok && j) {
            // aqui dentro tem que ter todos os sets
            if (j.id == undefined || j.id == "undefined" || j.id == "" || j.id == 0 || j.id == "0") {
                this.setId(j._id); // id do mongo
            } else {
                this.setId(j.id);
            }
            this.setIdCliente(j.idCliente);
            this.setNumero(j.numero);
            this.setDataExp(j.dataExp);
            this.setNumValidacao(j.numValidacao);
            return true;
        } else {
            return false;
        }
    }

    this.setId = function (id) {
        // verificar se eh um id valido (o id do mongo)
        this.id = id;
        return true;
    }

    this.setIdCliente = function (id) {
        // verificar se eh um id valido (o id do mongo)
        this.idCliente = id;
        return true;
    }

    this.setDataExp = function (dataExp) {
        // verificar se eh um id valido (o id do mongo)
        this.dataExp = dataExp;
        return true;
    }

    this.setNumero = function (numero) {
        // verificar se eh um id valido (o id do mongo)
        this.numero = numero;
        return true;
    }

    this.setNumValidacao = function (numValidacao) {
        // verificar se eh um id valido (o id do mongo)
        this.numValidacao = numValidacao;
        return true;
    }

    this.getId = function () {
        return this.id;
    }

    this.getIdCliente = function () {
        return this.idCliente;
    }

    this.getNumero = function () {
        return this.numero;
    }

    this.getDataExp = function () {
        return this.dataExp;
    }

    this.getNumValidacao = function () {
        return this.numValidacao;
    }
}

module.exports = Cartao;