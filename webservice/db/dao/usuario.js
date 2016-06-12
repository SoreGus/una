#!/bin/env node

function DaoUsuario() {
    /*
    this.add = function (usuario, fcb) {
        this.emailUso(usuario, function (uso) {
            if (uso) {
                fcb("-2");
            } else {
                var clt = dbCon[0].collection("Usuario");
                clt.insert(usuario, {
                    w: 1
                }, function (err, result) {
                    if (err) {
                        fcb("-1");
                    } else {
                        var email = "<br>Olá!<br><br>Seja bem-vindo ao Obra, o melhor lugar para você você cuidar da sua reforma!<br><br>Qualquer dúvida ou sugestão, nós estamos à disposição através do e-mail <a href='mailto:contato@inopus.com.br'>contato@inopus.com.br</a>.<br><br>Atenciosamente,<br><strong>Equipe Obra</strong><br><a href='http://obra.inopus.com.br' target='_blank'>http://obra.inopus.com.br</a><br>";
                        var e = new Email(usuario.getEmail(), "Bem-vindo ao Obra!", email);
                        e.enviar(function (result) {});
                        fcb(result);
                    }
                });
            }
        });
    }

    this.entrar = function (usuario, fcb) {
        var clt = dbCon[0].collection("Usuario");
        clt.findOne({
            senha: usuario.getSenha(),
            email: usuario.getEmail()
        }, function (err, result) {
            fcb(result);
        });
    }

    this.emailUso = function (usuario, fcb) {
        var clt = dbCon[0].collection("Usuario");
        clt.findOne({
            email: usuario.getEmail()
        }, {
            w: 1
        }, function (err, result) {
            if (err) {
                fcb(false);
            } else {
                if (result) {
                    fcb(true);
                } else {
                    fcb(false);
                }
            }
        });
    }
    */
}

module.exports = DaoUsuario;