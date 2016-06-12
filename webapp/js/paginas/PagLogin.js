function PagLogin() {
    this.construtor = function () {
        pagina.setTitle("Una");
        this.montaPagHtml();
    }

    this.montaPagHtml = function () {
        pagina.getPagina().empty();
        var main = document.createElement("main");
        main.style.marginTop = "2em !important";
        main.setAttribute("style", "margin-top:2em !important");
        var main_0 = document.createElement('div');
        main_0.className = "container";

        var div_0 = document.createElement('div');
        div_0.className = "row center";

        var div_1 = document.createElement('div');
        div_1.className = "col s12";

        var img_0 = document.createElement('img');
        img_0.src = "images/logo.png";
        img_0.className = "responsive-img";
        img_0.style.width = "13em";
        div_1.appendChild(img_0);
        div_0.appendChild(div_1);

        var div_1 = document.createElement('div');
        div_1.className = "col s12";
        var h2 = document.createElement("h6");
        h2.className = "white-text";
        h2.appendChild(document.createTextNode("Um toque. Uma nova experiência."));
        div_1.appendChild(h2);
        div_0.appendChild(div_1);

        main_0.appendChild(div_0);
        main.appendChild(main_0);
        pagina.getPagina().appendChild(main);


        var footer_0 = document.createElement('div');
        footer_0.className = "container";

        var div_7 = document.createElement('div');
        div_7.className = "row center";

        var a_0 = document.createElement('a');
        a_0.className = "light-blue darken-4 waves-effect waves-light btn-large btn-xl";
        var i = document.createElement("i");
        i.className = "mdi mdi-facebook left";
        a_0.appendChild(i);
        a_0.appendChild(document.createTextNode("Acesse com o facebook"));
        a_0.addEventListener("click", function () {

            facebookConnectPlugin.login(["public_profile", "user_friends", "user_photos"], function (result) {
                    var hq = new HttpReq("post", pagina.apiUrl() + "cliente/recuperarByFacebookID", function (res) {
                        console.log(res);
                        window.localStorage.setItem("usuario", res);
                        pagina.abrirPaginas("aguardaPagamento");
                    });
                    hq.enviar("facebookId=1234567");
                },
                function loginError(error) {
                    console.error(error)
                }
            );
        });

        div_7.appendChild(a_0);
        footer_0.appendChild(div_7);

        var div_7 = document.createElement('div');
        div_7.className = "row center";

        var a_0 = document.createElement('a');
        a_0.className = "waves-effect waves-light btn-flat white-text";
        a_0.appendChild(document.createTextNode("Não tenho conta."));
        a_0.addEventListener("click", function () {
            pagina.abrirPaginas("aguardaPagamento");
        });
        div_7.appendChild(a_0);
        footer_0.appendChild(div_7);


        pagina.getPagina().appendChild(footer_0);

    }

    this.construtor();
}