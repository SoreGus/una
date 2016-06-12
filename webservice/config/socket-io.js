#!/bin/env node

module.exports = function (server, app) {
    var io = require("socket.io").listen(server);

    //    var inChat = io.sockets.of("/inChat/chat").on("connection", function (socket) {
    io.sockets.on("connection", function (socket) {
        console.log("ouvindo...");
        // Success! Now listen to messages to be received
        socket.on("message", function (event) {
            console.log("Received message from client!", event);
        });

        //        socket.on("disconnect", function () {
        //            //            clearInterval(interval);
        //            console.log("Server has disconnected");
        //        });

    });

    //    app.post('/inChat/', new Token().acessoRestrito, function (req, res) {
    //        res.setHeader("Content-Type", "application/json; charset=utf-8");
    //        res.setHeader('Access-Control-Allow-Origin', '*');
    //        res.send("bbbbbbb: " + req.body.token);
    //    });

}