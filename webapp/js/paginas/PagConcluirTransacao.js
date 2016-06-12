function PagConcluirTransacao() {

    this.construtor = function () {
        pagina.setTitle("Una");
        this.montaPagHtml();
    }

    this.montaPagHtml = function () {
        pagina.getPagina().empty();
        var main = document.createElement("main");
        var infoDiv = document.createElement("div");
        infoDiv.className = "row";
        infoDiv.style.marginTop = "1em";
        infoDiv.setAttribute("style", "display:flex;margin-bottom:4em !important;margin-top:1em;");

        var divImgUsuario = document.createElement("div");
        divImgUsuario.className = "center col s4";

        var imgUsuario = document.createElement("img");
        imgUsuario.style.marginTop = "1em";
        imgUsuario.className = "responsive-img circle";
        imgUsuario.src = "images/outback.png";
        imgUsuario.style.width = "5em";
        divImgUsuario.appendChild(imgUsuario);

        infoDiv.appendChild(divImgUsuario);

        var divSpanNomeUsuario = document.createElement("div");
        divSpanNomeUsuario.className = "col s8 row";

        divSpanNomeUsuario.setAttribute("style", "align-self:center;margin-top:1em;");
        var pagamento = window.localStorage.getItem("pagamento");
        pagamento = JSON.parse(pagamento).results;

        var col = document.createElement("div");
        col.className = "col s12";
        var spanNomeUsuario = document.createElement("span");
        spanNomeUsuario.style.fontSize = "1em";
        spanNomeUsuario.style.fontWeight = "bold";
        spanNomeUsuario.appendChild(document.createTextNode("PAGAMENTO PARA"));
        col.appendChild(spanNomeUsuario);
        divSpanNomeUsuario.appendChild(col);

        var col = document.createElement("div");
        col.className = "col s12";
        var spanNomeUsuario = document.createElement("span");
        spanNomeUsuario.style.fontSize = "0.9em";
        spanNomeUsuario.appendChild(document.createTextNode(pagamento.nome));
        col.appendChild(spanNomeUsuario);
        divSpanNomeUsuario.appendChild(col);

        var col = document.createElement("div");
        col.className = "col s12";
        var spanNomeUsuario = document.createElement("span");
        spanNomeUsuario.style.fontSize = "1em";
        spanNomeUsuario.style.fontWeight = "bold";
        spanNomeUsuario.appendChild(document.createTextNode("VALOR TOTAL"));
        col.appendChild(spanNomeUsuario);
        divSpanNomeUsuario.appendChild(col);

        var col = document.createElement("div");
        col.className = "col s12";
        var spanNomeUsuario = document.createElement("span");
        spanNomeUsuario.style.fontSize = "0.9em";
        spanNomeUsuario.appendChild(document.createTextNode("R$ " + pagamento.valor));
        col.appendChild(spanNomeUsuario);
        divSpanNomeUsuario.appendChild(col);

        var col = document.createElement("div");
        col.className = "col s12";
        var spanNomeUsuario = document.createElement("span");
        spanNomeUsuario.style.fontSize = "1em";
        spanNomeUsuario.style.fontWeight = "bold";
        spanNomeUsuario.appendChild(document.createTextNode("LIDER DA COMPRA"));
        col.appendChild(spanNomeUsuario);
        divSpanNomeUsuario.appendChild(col);

        var col = document.createElement("div");
        col.className = "col s12";
        var spanNomeUsuario = document.createElement("span");
        spanNomeUsuario.style.fontSize = "0.9em";
        spanNomeUsuario.appendChild(document.createTextNode("Guilherme Uezima"));
        col.appendChild(spanNomeUsuario);
        divSpanNomeUsuario.appendChild(col);

        infoDiv.appendChild(divSpanNomeUsuario);
        main.appendChild(infoDiv);

        var form = document.createElement("div");
        form.className = "col s12";

        var row = document.createElement("div");
        row.className = "row";
        var col = document.createElement("div");
        col.className = "col s2 center";
        var i = document.createElement("i");
        i.className = "mdi mdi-facebook-box";
        i.style.fontSize = "2em";
        col.appendChild(i);
        row.appendChild(col);

        var col = document.createElement("div");
        col.className = "col s10";
        var span = document.createElement("span");
        span.style.fontSize = "1em";
        span.style.fontWeight = "bold";
        span.appendChild(document.createTextNode("Pagamento sendo realizado com"));
        span.style.textTransform = "uppercase";
        col.appendChild(span);
        row.appendChild(col);
        form.appendChild(row);

        var row = document.createElement("div");
        row.className = "row";
        row.id = "pagamentos";

        form.appendChild(row);
        main.appendChild(form);

        pagina.getPagina().appendChild(main);

        var footer = document.createElement("div");
        footer.className = "container";
        var div_10 = document.createElement('div');
        div_10.className = "row center";

        var div_11 = document.createElement('div');
        div_11.className = "col s12 center";
        div_11.style.marginBottom = "0.5em";

        var a_0 = document.createElement('a');
        a_0.className = "waves-effect waves-light green darken-2 btn btn-large btn-xl white-text";
        a_0.appendChild(document.createTextNode("Finalizar"));
        a_0.addEventListener("click", function () {
            clearInterval(idInterval);
            pagina.abrirPaginas("main");
            alerta.abrirSucesso("Pagamento Realizado");

        });
        div_11.appendChild(a_0);
        div_10.appendChild(div_11);

        var div_11 = document.createElement('div');
        div_11.className = "col s12 center";
        var a_0 = document.createElement('a');
        a_0.className = "waves-effect waves-light red btn btn-large btn-xl white-text";
        a_0.appendChild(document.createTextNode("Recusar pagamento"));
        a_0.addEventListener("click", function () {
            clearInterval(idInterval);
            pagina.abrirPaginas("aguardaPagamento");
            alerta.abrirErro("Pagamento recusado");

        });
        div_11.appendChild(a_0);
        div_10.appendChild(div_11);

        footer.appendChild(div_10);
        pagina.getPagina().appendChild(footer);
        $('select').material_select();

        this.pagamento = function (nome, imagem, valor, pago) {
            var div = document.createElement("div");
            div.className = "row col s12 centralizacaoVertical";
            var col = document.createElement("div");
            col.className = "col s3 center";
            var img = document.createElement("img");
            img.className = "responsive-img circle";
            img.src = imagem;
            img.style.width = "3em";
            col.appendChild(img);
            div.appendChild(col);

            var col = document.createElement("div");
            col.className = "col s7";
            var span = document.createElement("span");
            span.style.fontSize = "0.8em";
            span.style.fontWeight = "bold";
            span.appendChild(document.createTextNode(nome + " (R$" + valor + ")"));
            col.appendChild(span);
            div.appendChild(col);

            var col = document.createElement("div");
            col.className = "col s2";
            if (pago == 1) {
                var i = document.createElement("i");
                i.className = "mdi mdi-check green-text text-darken-2";
                i.style.fontSize = "2em";
                col.appendChild(i);
            }
            div.appendChild(col);
            document.getElementById("pagamentos").appendChild(div);
        }
        this.pagamento("Gustavo Soré", "https://fbcdn-sphotos-c-a.akamaihd.net/hphotos-ak-xfa1/t31.0-8/10943781_761438727266352_1019652914413690159_o.jpg", "500", 0);
        this.pagamento("Maria Das Dores", "https://fbcdn-sphotos-e-a.akamaihd.net/hphotos-ak-xpa1/t31.0-8/10668816_835456226476434_8804265515097136627_o.jpg", "500", 0);


        var usuario = window.localStorage.getItem("usuario");
        usuario = JSON.parse(usuario);
        idInterval = setInterval(function () {
            var hq = new HttpReq("post", pagina.apiUrl() + "pagamentos/checarPagamento/" + usuario._id, function (res) {

                console.log(res);
                if (res.result == "none") {
                    console.log("não recebido");
                } else if (res.err == null) {
                    //                    var hq2 = new HttpReq("post", pagina.apiUrl() + "pagamentos/efetuarPagamentoUnitario", function (res2) {
                    //                        console.log(res2.err);
                    //                        console.log(res2.result);
                    //                    });
                    //                    hq2.enviar("idCliente=" + usuario._id + "&pagamento=" + JSON.stringify(res.result), false, false);
                }
            });
            hq.enviar(undefined, false, false);
        }, 5000);

    }

    this.construtor();
}