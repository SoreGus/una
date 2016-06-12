#!/bin/env node

function Pagamento() {
    this.id = undefined;

    this.idEstabelecimento = undefined;
    this.valor = undefined;
    this.estado = undefined;
    this.listaClientes = undefined;

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
            this.setIdEstabelecimento(j.idEstabelecimento);
            this.setValor(j.valor);
            this.setEstado(j.estado);
            this.setListaClientes(j.listaClientes);
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

    this.setIdEstabelecimento = function (idEstabelecimento) {
        // verificar se eh um id valido (o id do mongo)
        this.idEstabelecimento = idEstabelecimento;
        return true;
    }

    this.setEstado = function (estado) {
        // verificar se eh um id valido (o id do mongo)
        this.estado = estado;
        return true;
    }

    this.setValor = function (valor) {
        // verificar se eh um id valido (o id do mongo)
        this.valor = valor;
        return true;
    }

    this.setListaClientes = function (listaClientes) {
        // verificar se eh um id valido (o id do mongo)
        this.listaClientes = listaClientes;
        return true;
    }

    this.getId = function () {
        return this.id;
    }

    this.getIdEstabelecimento = function () {
        return this.idEstabelecimento;
    }

    this.getValor = function () {
        return this.valor;
    }

    this.getEstado = function () {
        return this.estado;
    }

    this.getListaClientes = function () {
        return this.listaClientes;
    }
}

module.exports = Pagamento;