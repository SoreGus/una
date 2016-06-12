function HttpReq(metodoRecebido, urlRecebido, fSucesso, fErro) {
    // dependencias
    // precisa ter instanciado as seguintes classes: Carregando, Token e Alerta

    this.url = undefined;
    this.metodo = undefined;
    this.xmlHttpRequest = undefined;
    this.variaveisCache = undefined; // acho que eu fiz essa para poder reenviar a requisição automaticamente

    this.construtor = function (metodoRecebido, urlRecebido) {
        this.metodo = metodoRecebido;
        this.url = urlRecebido;
        this.xmlHttpRequest = new XMLHttpRequest();
        if (!fSucesso) {
            fSucesso = function (result) {
                console.log("Sucesso:" + result);
            }
        }
        if (!fErro) {
            fErro = function (result) {
                //pagina.erroPadraoConexao();
                console.log("erro");
            }
        }
        return true;
    }

    this.enviar = function (variaveis, logado, telaCarregando, tempoEsgotado) {
        if (typeof variaveis == "undefined") {
            variaveis = "";
        } else {
            this.variaveisCache = variaveis;
        }
        if (typeof logado == "undefined") {
            // tem que enviar o token (para paginas restritas do servidor)
            logado = false;
        }
        if (typeof telaCarregando == "undefined") {
            // aparecer a tela de carregando
            telaCarregando = true;
        }

        // FIXME
        // Esse if aqui precisa verificar se é um numero também
        if (typeof tempoEsgotado == "undefined" || tempoEsgotado < 1) {
            // tempo para abort() requisição
            tempoEsgotado = 30000;
        }
        this.xmlHttpRequest.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                fSucesso(this.response);
                if (telaCarregando) {
                    carregando.fechar();
                }
            } else if (this.readyState == 4 && this.status != 200) {
                // TESTAR
                // nao sei se funciona daqui para baixo
                if (this.status == 401) {
                    if (localStorage.getItem("usuario")) {
                        var usuario = new Usuario();
                        usuario.json(localStorage.getItem("usuario"));
                        var hr = new HttpReq("post", pagina.apiUrl() + "usuario/entrar", function (result) {
                            if (result == "-1") {
                                alerta.abrirErro("E-mail ou senha inválidos.");
                                localStorage.setItem("usuario", undefined);
                                pagina.abrirPaginas("login");
                            } else if (result == "0") {
                                alerta.abrirErro("Erro ao entrar. Por favor, verifique os dados inseridos e tente novamente mais tarde.");
                                localStorage.setItem("usuario", undefined);
                                pagina.abrirPaginas("login");
                            } else {
                                var senha = usuario.getSenha();
                                result = JSON.parse(result);
                                usuario = new Usuario();
                                usuario.json(result[0]);
                                usuario.setSenhaSemVerificar(senha);
                                localStorage.setItem("usuario", usuario.jsonString());
                                var tkn = new Token(result[1]);
                                localStorage.setItem("token", tkn.jsonString());
                            }
                        }, function (result) {
                            console.log("erro perda de conexao");
                            localStorage.setItem("usuario", undefined);
                            pagina.abrirPaginas("login");
                        });
                        hr.enviar("usuario=" + usuario.jsonString());
                        if (typeof fErro == typeof Function) {
                            fErro();
                        }
                    } else {
                        alerta.abrirErro("Esse acesso precisa ser autenticado.", 10000);
                        console.log(this.status + " : " + this.readyState);
                        carregando.terminar(fErro);
                        // precisa redirecionar aqui para a página inicial para que o usuário possar fazer o login
                    }
                } else if (this.status == 404) {
                    alerta.abrirErro("Serviço não encontrado", 10000);
                    console.log(this.status + " : " + this.readyState);
                    carregando.terminar(fErro);
                } else {
                    alerta.abrirErro("Erro desconhecido. Tente novamente mais tarde.");
                    console.log(this.status + " : " + this.readyState);
                    carregando.terminar(fErro);
                }
            }
        };
        if (this.metodo == "post") {
            this.xmlHttpRequest.open("POST", this.url, true);
            this.xmlHttpRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=utf-8");
            this.xmlHttpRequest.timeout = tempoEsgotado;
            var v = "";
            if (localStorage.getItem("token") && variaveis) {
    v = "token=" + localStorage.getItem("token") + "&" + variaveis;
} else if (localStorage.getItem("token") && !variaveis) {
    v = "token=" + localStorage.getItem("token");
} else if (!localStorage.getItem("token") && variaveis) {
                v = variaveis;
            }
            this.xmlHttpRequest.send(v);
            if (telaCarregando) {
                carregando.abrir(tempoEsgotado, "Verifique a sua conexão com a Internet e tente novamente.");
            }
        } else {
            alert("Método inválido: " + this.metodo);
            return false;
        }
        return true;
    }

    this.construtor(metodoRecebido, urlRecebido);
}