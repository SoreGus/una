function PagAguardaPagamento() {

    this.construtor = function () {
        pagina.setTitle("Una");
        this.montaPagHtml();
    }

    this.montaPagHtml = function () {
        pagina.getPagina().empty();
        var main = document.createElement("main");
        var row = document.createElement("div");
        row.className = "row centralizacaoVertical column";
        row.style.height = "100%";

        var col = document.createElement("div");
        col.className = "col s12 center";
        var img = document.createElement("img");
        img.className = "responsive-img";
        img.src = "images/pagamento.png";
        img.addEventListener("click", function () {
            var hq = new HttpReq("post", pagina.apiUrl() + "pagamentos/getPagamento/575d01db9a1ab18967000000", function (res) {
                console.log(res);
                window.localStorage.setItem("pagamento", res);
                pagina.abrirPaginas("pagamento");
            });
            hq.enviar();
        });
        img.style.width = "9em";
        col.appendChild(img);
        row.appendChild(col);


        var col = document.createElement("div");
        col.className = "col s12 center";
        var span = document.createElement("span");
        span.className = "center";
        span.appendChild(document.createTextNode("Aproxime o celular a uma estação de pagamento."));
        col.appendChild(span);
        row.appendChild(col);

        main.appendChild(row);
        pagina.getPagina().appendChild(main);
        var usuario = window.localStorage.getItem("usuario");
        usuario = JSON.parse(usuario);
        setInterval(function () {
            var hq = new HttpReq("post", pagina.apiUrl() + "pagamentos/checarPagamento/" + usuario._id, function (res) {

                console.log(res);
                window.localStorage.setItem("pagamento", res);
                pagina.abrirPaginas("pagamento");
            });
        }, 5000);


    }

    this.construtor();
}