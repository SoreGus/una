function PagPagamento() {

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
        infoDiv.setAttribute("style", "display:flex");

        var divImgUsuario = document.createElement("div");
        divImgUsuario.className = "center col s4";

        var imgUsuario = document.createElement("img");
        imgUsuario.style.marginTop = "1em";
        imgUsuario.className = "responsive-img circle";
        var pagamento = window.localStorage.getItem("pagamento");
        pagamento = JSON.parse(pagamento).results;
        imgUsuario.src = pagamento.foto;
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

        infoDiv.appendChild(divSpanNomeUsuario);
        main.appendChild(infoDiv);

        var form = document.createElement("form");
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
        span.style.fontSize = "1.2em";
        span.style.fontWeight = "bold";
        span.appendChild(document.createTextNode("Compartilhar com amigos"));
        col.appendChild(span);

        row.appendChild(col);
        form.appendChild(row);


        var row = document.createElement("div");
        row.className = "row";
        var div_7 = document.createElement('div');
        div_7.className = "input-field col s12";
        var input = document.createElement("input");
        input.type = "text";
        input.tagName = "tags";
        input.id = "tags";
        input.setAttribute("data-role", "materialtags");
        div_7.appendChild(input);

        var label_2 = document.createElement('label');
        label_2.htmlFor = "tags";
        var i = document.createElement("i");
        i.className = "mdi mdi-account-search";
        label_2.appendChild(i);
        div_7.appendChild(label_2);
        row.appendChild(div_7);

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
            pagina.abrirPaginas("concluirPagamento");

        });
        div_10.appendChild(a_0);

        footer.appendChild(div_10);
        pagina.getPagina().appendChild(footer);

        servicos = new Bloodhound({
            local: [{
                'name': 'Guilherme',
                'id': '421234234532'
            }, {
                'name': 'Gustavo',
                'id': '421234234536'
            }],
            identify: function (obj) {
                return obj.name;
            },
            datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
            queryTokenizer: Bloodhound.tokenizers.whitespace
        });

        servicos.initialize();

        $('input').materialtags({
            typeaheadjs: {
                name: 'servicos',
                displayKey: 'name',
                valueKey: 'name',
                source: servicos.ttAdapter()
            },
            typeahead: {
                source: ['Amsterdam', 'Washington', 'Sydney', 'Beijing', 'Cairo']
            },
        });

    }

    this.construtor();
}