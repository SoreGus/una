function Pagina() {
    var paginaAnterior = undefined;
    var paginaAtual = undefined;
    this.getPaginaAtual = function () {
        return paginaAtual;
    }

    this.getPaginaAnterior = function () {
        return paginaAnterior;
    }

    this.setPaginaAtual = function (pAtual) {
        paginaAtual = pAtual;
        return true;
    }

    this.setPaginaAnterior = function (pAnterior) {
        paginaAnterior = pAnterior;
        return true;
    }

    this.scrollTo = function (ele) {
        ele.scrollIntoView(true);
    }

    this.getPagina = function () {
        return document.getElementById("pagina");
    }

    this.abrirPaginas = function (novaPagina) {
        document.getElementsByTagName("body")[0].className = "grey lighten-4";
        document.getElementsByTagName("body")[0].style.backgroundImage = "";
        document.getElementsByTagName("header")[0].style.display = "block";
        if (this.getPaginaAtual() == novaPagina && novaPagina == "menu_principal") {
            novaPagina = this.getPaginaAnterior();
        }

        if (novaPagina == "inicial") {
            pag = new PagInicial();
        } else if (novaPagina == "main") {
            pag = new PagMain();
        } else if (novaPagina == "pagamento") {
            pag = new PagPagamento();
        } else if (novaPagina == "confirmarPagamento") {
            pag = new PagConfirmarPagamento();
        } else if (novaPagina == "aguardaPagamento") {
            pag = new PagAguardaPagamento();
        } else if (novaPagina == "concluirPagamento") {
            pag = new PagConcluirTransacao();
        } else if (novaPagina == "login") {
            document.getElementsByTagName("body")[0].style.backgroundImage = "url('images/filter.png'), url('images/bg/bgLogin.jpg')";
            document.getElementsByTagName("header")[0].style.display = "none";
            pag = new PagLogin();
        }


        this.setPaginaAnterior(this.getPaginaAtual());
        this.setPaginaAtual(novaPagina);

        window.setTimeout(function () {
            pagina.scrollTo(document.getElementsByTagName("body")[0]);
        }, 50);
        return true;
    }


    this.setTitle = function (title) {
        document.getElementsByTagName("title")[0].innerHTML = title;
    }

    this.apiUrl = function () {
        return "https://app-unaapp.rhcloud.com/api/";
    }

}