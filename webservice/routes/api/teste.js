#!/bin/env node

module.exports = function (app) {
    app.get('/api/teste/1', function (req, res) {
        res.setHeader("Content-Type", "application/json; charset=utf-8");
        res.setHeader('Access-Control-Allow-Origin', '*');

        var Simplify = require("simplify-commerce"),
            client = Simplify.getClient({
                publicKey: 'sbpb_YmZmM2NlYTAtNmFiOS00ZDY0LTgxZGMtY2I2YTRmZWQ3ZjM0',
                privateKey: 'm+P5EdJEoE35gcI5ElT3B6gASLnIeH7K70qeO0SR2Fp5YFFQL0ODSXAOkNtXTToq'
            });
        client.cardtoken.create({
            card: {
                addressState: "MO",
                expMonth: "11",
                expYear: "19",
                addressCity: "SaoPaulo",
                cvc: "123",
                number: "5555555555554444"
            }
        }, function (errData, data) {
            if (errData) {
                console.error("Error Message: " + errData.data.error.message);
                // handle the error
                return;
            }

            teste1 = data.id;
            console.log("Success Response: " + teste1);

            var Simplify2 = require("simplify-commerce"),
                client2 = Simplify2.getClient({
                    publicKey: 'sbpb_YmZmM2NlYTAtNmFiOS00ZDY0LTgxZGMtY2I2YTRmZWQ3ZjM0',
                    privateKey: 'm+P5EdJEoE35gcI5ElT3B6gASLnIeH7K70qeO0SR2Fp5YFFQL0ODSXAOkNtXTToq'
                });

            client2.payment.create({
                amount: "1000",
                token: teste1,
                description: "payment description",
                reference: "7a6ef6be31",
                currency: "BRL"
            }, function (errData, data) {

                if (errData) {
                    console.error("Error Message: " + errData.data.error.message);
                    // handle the error
                    return;
                }
                res.send("1");
                console.log("Payment Status: " + data.paymentStatus);
            });


        });
    });
}