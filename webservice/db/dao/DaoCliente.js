#!/bin/env node

function DaoCliente() {
    
    this.add = function (cliente, fcb) {



                var clt = dbCon[0].collection("Cliente");
                clt.insert(cliente, {
                    w: 1
                }, function (err, result) {
                    if (err) {
                        fcb("-1");
                    } else {
                        fcb(result);
                    }
                });


    }

    this.recuperar = function (id, fcb) {
        var clt = dbCon[0].collection("Cliente");
        clt.findOne({
            _id: id
        }, function (err, result) {
            fcb(result);
        });
    }

    this.recuperarByFacebookID = function (facebookId, fcb) {
        var clt = dbCon[0].collection("Cliente");
        clt.findOne({
            facebookId: facebookId
        }, function (err, result) {
            fcb(result);
        });
    }
    
}

this.atualizar = function (cliente, done) {
    this._connection.collection('Cliente').findAndModify({
            _id: new mongodb.ObjectID(cliente._id)
        }, [['_id', 'asc']], {
            "$set": {
                facebookId: cliente.facebookId,
                nome: cliente.nome,
                foto: cliente.foto
            }
        },
        function (err, doc) {
            if (err) {
                done(err, 'Houve um erro na atualização do cliente.');
            } else {
                done(null, 'Cliente atualizado com sucesso!');
            }
        }
    );
}

module.exports = DaoCliente;