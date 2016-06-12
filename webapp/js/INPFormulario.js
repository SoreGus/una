function INPFormulario() {

    var numeroCampos = 0;
    var listaCampos = new Array();

    this.construtor = function (lista) {
        // pagina.setTitle("Inicial");
        // this.montaPagHtml();

        numeroCampos = lista.length();
        listaCampos = lista;
    }

    var field = {
        text_mat : 0, 
        datePicker_mat : 1,
        list_mat : 2
    };

  this.montaElementoPrincipal = function (tipos,nomes,valores,valoreslista) {

        var tipoElemento = undefined;
        var nomeElemento = undefined;
        var valor = undefined;
        var valoresLista = undefined;

        var elemento = undefined;

        for(var i = 0;i < tipos.length;i++){

            tipoElemento = tipos[i];
            nomeElemento = nomes[i];
            valor = valores[i];
            valoresLista = valoreslista[i];

            switch(tipoElemento){
                case field.text_mat: 

                default: break;
            }

        }

        for (var i = 0,i < numeroCampos; i++) {

            campo = lista[i];

            if(campo.tipo == 1){

            }
        }
    }

    this.construtor();
}