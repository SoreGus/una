function PagConfirmarPagamento() {

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

        var usuario = window.localStorage.getItem("usuario");
        usuario = JSON.parse(usuario);

        var imgUsuario = document.createElement("img");
        imgUsuario.style.marginTop = "1em";
        imgUsuario.className = "responsive-img circle";
        imgUsuario.src = usuario.foto;
        imgUsuario.style.width = "5em";
        divImgUsuario.appendChild(imgUsuario);

        infoDiv.appendChild(divImgUsuario);

        var divSpanNomeUsuario = document.createElement("div");
        divSpanNomeUsuario.className = "col s8 row";

        divSpanNomeUsuario.setAttribute("style", "align-self:center;margin-top:1em;");


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
        spanNomeUsuario.appendChild(document.createTextNode(usuario.nome));
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
        var pagamento = window.localStorage.getItem("pagamento");
        pagamento = JSON.parse(pagamento).results;

        var col = document.createElement("div");
        col.className = "col s12";
        var spanNomeUsuario = document.createElement("span");
        spanNomeUsuario.style.fontSize = "0.9em";
        spanNomeUsuario.appendChild(document.createTextNode("R$ " + pagamento.valor));
        col.appendChild(spanNomeUsuario);
        divSpanNomeUsuario.appendChild(col);

        infoDiv.appendChild(divSpanNomeUsuario);
        main.appendChild(infoDiv);

        var form = document.createElement("form");
        form.className = "col s12";


        var row = document.createElement("div");
        row.className = "row";
        var div_0 = document.createElement('div');
        div_0.className = "input-field col s12";


        var input_icon_prefix = document.createElement('input');
        input_icon_prefix.placeholder = "R$";
        input_icon_prefix.type = "text";
        input_icon_prefix.id = "valor";
        div_0.appendChild(input_icon_prefix);


        var label_0 = document.createElement('label');
        label_0.htmlFor = "valor";
        label_0.appendChild(document.createTextNode("Valor a ser pago"));
        div_0.appendChild(label_0);
        row.appendChild(div_0);

        var div_0 = document.createElement('div');
        div_0.className = "col s12";

        var div = document.createElement("div");
        div.className = "col s12";
        var span = document.createElement("span");
        span.appendChild(document.createTextNode("CARTÃO"));
        span.style.fontSize = "1em";
        span.style.fontWeight = "bold";
        div.appendChild(span);
        div_0.appendChild(div);


        var div = document.createElement("div");
        div.className = "row col s12";
        var span = document.createElement("span");
        span.appendChild(document.createTextNode("**** **** **** 67"));
        div.appendChild(span);
        div_0.appendChild(div);


        var div = document.createElement("div");
        div.className = "row col s12";
        var span = document.createElement("span");
        span.appendChild(document.createTextNode("MODALIDADE DO CARTÃO"));
        span.style.fontSize = "1em";
        span.style.fontWeight = "bold";
        div.appendChild(span);
        div_0.appendChild(div);

        var div = document.createElement("div");
        div.className = "col s12";
        var p = document.createElement("p");
        var input = document.createElement("input");
        input.className = "with-gap";
        input.name = "modalidade";
        input.type = "radio";
        input.id = "credito";
        p.appendChild(input);
        var label = document.createElement("label");
        label.htmlFor = "credito";
        label.appendChild(document.createTextNode("Crédito"));
        p.appendChild(label);
        div.appendChild(p);
        var p = document.createElement("p");
        var input = document.createElement("input");
        input.className = "with-gap";
        input.name = "modalidade";
        input.type = "radio";
        input.id = "debito";
        p.appendChild(input);
        var label = document.createElement("label");
        label.htmlFor = "debito";
        label.appendChild(document.createTextNode("Débito"));
        p.appendChild(label);
        div.appendChild(p);
        div_0.appendChild(div);



        row.appendChild(div_0);

        form.appendChild(row);
        main.appendChild(form);


        pagina.getPagina().appendChild(main);


        var footer = document.createElement("div");
        footer.className = "container";
        var div_10 = document.createElement('div');
        div_10.className = "row center";

        var a_0 = document.createElement('a');
        a_0.className = "waves-effect waves-light green darken-2 btn btn-large btn-xl white-text";
        a_0.appendChild(document.createTextNode("Efetuar pagamento"));
        a_0.addEventListener("click", function () {
            pagina.abrirPaginas("escolheParceiro");

        });
        div_10.appendChild(a_0);

        footer.appendChild(div_10);
        pagina.getPagina().appendChild(footer);

    }

    this.construtor();
}