#!/bin/env node

function DaoEstabelecimento() {
    
    this.add = function (estabelecimento, fcb) {



                var clt = dbCon[0].collection("Estabelecimento");
                clt.insert(estabelecimento, {
                    w: 1
                }, function (err, result) {
                    if (err) {
                        fcb("-1");
                    } else {
                        fcb(result);
                    }
                });


    }

    this.recuperar = function (idBeacon, fcb) {
        var clt = dbCon[0].collection("Estabelecimento");
        clt.findOne({
            idBeacon: idBeacon
        }, function (err, result) {
            fcb(result);
        });
    }
    
}

this.atualizar = function (estabelecimento, done) {
    this._connection.collection('Estabelecimento').findAndModify({
            _id: new mongodb.ObjectID(estabelecimento._id)
        }, [['_id', 'asc']], {
            "$set": {
                idBeacon: estabelecimento.idBeacon,
                nome: estabelecimento.nome,
                foto: estabelecimento.foto
            }
        },
        function (err, doc) {
            if (err) {
                done(err, 'Houve um erro na atualização do estabelecimento.');
            } else {
                done(null, 'Estabelecimento atualizado com sucesso!');
            }
        }
    );
}

module.exports = DaoEstabelecimento;