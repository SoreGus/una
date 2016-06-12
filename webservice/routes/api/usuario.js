#!/bin/env node

module.exports = function (app) {
    app.post('/api/usuario/entrar', new Token().acessoLivre, function (req, res) {
        res.setHeader("Content-Type", "application/json; charset=utf-8");
        res.setHeader('Access-Control-Allow-Origin', '*');
        var daoUsuario = new DaoUsuario();
        var usuario = new Usuario();
        if (usuario.json(req.body.usuario)) {
            if (usuario.getEmail() != undefined &&
                usuario.getEmail() != "" &&
                usuario.getSenha() != undefined &&
                usuario.getSenha() != ""
            ) {
                daoUsuario.entrar(usuario, function (result) {
                    if (typeof new Object == typeof result && result != null && result != undefined) {
                        usuario = new Usuario();
                        console.log(result);
                        console.log(result._id);
                        usuario.json(result);
                        var tkn = new Token({
                            usuario_id: usuario.getId()
                        });
                        daoToken = new DaoToken();
                        daoToken.renovar(tkn, function (result) {
                            if (result) {
                                var arr = new Array();
                                arr.push(JSON.parse(usuario.jsonString()));
                                arr.push(JSON.parse(tkn.jsonString()));
                                res.send(arr);
                            } else {
                                res.send("-1");
                            }
                        });
                    } else {
                        res.send("-1");
                    }
                });
            } else {
                res.send("-1");
            }
        } else {
            res.send("-1");
        }
    });

    app.post('/api/usuario/teste', new Token().acessoRestrito, function (req, res) {
        res.setHeader("Content-Type", "application/json; charset=utf-8");
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.send("bbbbbbb: " + req.body.token);
    });

    app.post('/api/usuario/cadastrar/1', new Token().acessoLivre, function (req, res) {
        res.setHeader("Content-Type", "application/json; charset=utf-8");
        res.setHeader('Access-Control-Allow-Origin', '*');
        var daoUsuario = new DaoUsuario();
        var usuario = new Usuario();
        if (usuario.json(req.body.usuario)) {
            daoUsuario.add(usuario, function (result) {
                if (result == "-1") {
                    // erro generico
                    res.send("-1");
                } else if (result == "-2") {
                    // e-mail jรก em uso
                    res.send("-2");
                } else {
                    var tkn = new Token({
                        usuario_id: result[0]._id.toString()
                    });
                    daoToken = new DaoToken();
                    daoToken.renovar(tkn, function (result) {
                        if (result) {
                            res.send(tkn.jsonString());
                        } else {
                            res.send("-1");
                        }
                    });
                }
            });
        } else {
            res.send("-1");
        }
    });
}