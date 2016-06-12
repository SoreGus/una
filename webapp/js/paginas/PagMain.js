function PagMain() {

    this.construtor = function () {
        pagina.setTitle("Una");
        this.montaPagHtml();
    }

    this.montaPagHtml = function () {
        pagina.getPagina().empty();
        var main = document.createElement("main");
        var timeline = document.createElement("div");
        timeline.id = "cd-timeline";
        timeline.className = "cd-container";
        main.appendChild(timeline);
        pagina.getPagina().appendChild(main);

        this.construtorTimeline = function (titulo, texto, imagem, cor) {

            var div_0 = document.createElement('div');
            div_0.className = "cd-timeline-block";

            var div_1 = document.createElement('div');
            div_1.className = "cd-timeline-img";
            div_1.style.background = "url('" + imagem + "')";
            div_1.style.backgroundSize = "cover";


            div_0.appendChild(div_1);


            var div_2 = document.createElement('div');
            div_2.className = "cd-timeline-content";

            var h5_0 = document.createElement('h5');
            h5_0.appendChild(document.createTextNode(titulo));
            div_2.appendChild(h5_0);


            var p_0 = document.createElement('p');
            p_0.appendChild(document.createTextNode(texto));
            div_2.appendChild(p_0);

            div_0.appendChild(div_2);

            document.getElementById("cd-timeline").appendChild(div_0);

        }

        this.construtorTimeline("Outback", "R$ 300 foram gastos", "https://pbs.twimg.com/profile_images/488704549914296320/RllT3rh2.png");

        this.construtorTimeline("Americanas", "R$ 200 foram gastos", "http://cdn1.mundodastribos.com/2015/02/Trabalhe-Conosco-Americanas-Enviar-Curr%C3%ADculo.jpg");


        this.construtorTimeline("Fast Shop", "R$ 150 foram gastos", "http://poeira.com.br/english/images/clientes/21-fast-shop.jpg");


        this.construtorTimeline("Saraiva", "R$ 75 foram gastos", "https://pbs.twimg.com/profile_images/511937571392204800/svEscwKp.jpeg");


        this.construtorTimeline("Burguer King", "R$ 34 foram gastos", "https://pbs.twimg.com/profile_images/694921357864386563/p0nF8Bj8.jpg");

        $('ul.tabs').tabs();
        $('.parallax').parallax();
    }

    this.construtor();
}