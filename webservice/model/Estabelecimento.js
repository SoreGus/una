#!/bin/env node

function Estabelecimento() {
    this.id = undefined;

    this.idBeacon = undefined;
    this.nome = undefined;
    this.foto = undefined;

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
            this.setIdBeacon(j.idBeacon);
            this.setNome(j.nome);
            this.setFoto(j.foto);
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

    this.setIdBeacon = function (id) {
        // verificar se eh um id valido (o id do mongo)
        this.idBeacon = id;
        return true;
    }

    this.setFoto = function (foto) {
        // verificar se eh um id valido (o id do mongo)
        this.foto = foto;
        return true;
    }

    this.setNome = function (nome) {
        // verificar se eh um id valido (o id do mongo)
        this.nome = nome;
        return true;
    }

    this.getId = function () {
        return this.id;
    }

    this.getIdBeacon = function () {
        return this.idBeacon;
    }

    this.getNome = function () {
        return this.nome;
    }

    this.getFoto = function () {
        return this.foto;
    }
}

module.exports = Estabelecimento;