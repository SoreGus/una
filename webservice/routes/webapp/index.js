#!/bin/env node

module.exports = function (app) {
    app.get(['/index', '/'], function (req, res) {
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.send(require('fs').readFileSync("./webapp/index.html"));
    });
}