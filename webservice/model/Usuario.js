#!/bin/env node

function Usuario() {
    this.id = undefined;

    this.jsonString = function (senha) {
        var s = this.senha;
        if (!senha) {
            this.setSenhaSemVerificar(undefined);
        }

        var j = JSON.stringify(this);

        if (!senha) {
            this.setSenhaSemVerificar(s);
        }

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

    this.getId = function () {
        return this.id;
    }
}

module.exports = Usuario;