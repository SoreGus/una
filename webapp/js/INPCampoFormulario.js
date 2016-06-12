function INPCampoFormulario() {
    this.nome = "";
    this.tipo = 0;
    this.valor = "";

    this.jsonString = function () {
        return JSON.stringify(this);
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
        if (ok) {
            // aqui dentro tem que ter todos os sets
            this.setId(j.id);
            this.setNome(j.nome);
            return true;
        } else {
            return false;
        }
    }

    this.setNome = function (s) {
        this.nome = s;
        return true;
    }

    this.getNome = function () {
        return this.nome;
    }

    this.setTipo = function (s) {
        this.tipo = s;
        return true;
    }

    this.getTipo = function () {
        return this.tipo;
    }

    this.setValor = function (s) {
        this.valor = s;
        return true;
    }

    this.setValor = function (s) {
        this.valor = s;
        return true;
    }
}