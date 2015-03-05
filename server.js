// require deps
require('node-jsx').install({ extension: '.jsx' });
var Express = require('express');
var React = require('react');
var Fs = require('fs');
var HtmlComponent = require('./components/Html.jsx');
var AppComponent = require('./components/App.jsx');

// create express server and components
var express = Express();
var Html = React.createFactory(HtmlComponent);
var App = React.createFactory(AppComponent);

// define landing page handler
express.get('/:name?', function (req, res) {

    var props = { name: req.params.name };
    var app = React.renderToString(App(props));
    var html = React.renderToStaticMarkup(Html({
        markup: app,
        state: 'window.state = ' + JSON.stringify(props) + ';'
    }));

    res.send(html);
});

// define client code handler
express.get('/assets/client.js', function (req, res) {

    Fs.createReadStream('./build/client.js').pipe(res);
});

// start the server
var port = process.env.PORT || 3000;
var server = express.listen(port, function () {

    var host = server.address().address;
    console.log('Isomorphic app listening at http://%s:%s', host, port);
});
