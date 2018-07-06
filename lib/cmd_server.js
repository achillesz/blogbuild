var express = require('express');

var serverStatic = require('serve-static');
var path = require('path');
var utils = require('./utils');
var open = require('open');
var fs = require('fs');

module.exports = function(dir) {
    dir = dir || '.';
    //初始化express
    var app = express();
    var router = express.Router();
    var config = utils.loadConfig(dir);
    var port = config.port || 3000;
    console.log(path.resolve(dir, 'assets'), 'static')
    app.use('/assets', serverStatic(path.resolve(dir, 'assets')));
    app.use(router);

    router.get('/posts/*', function(req,res, next) {
        console.log(req.url,'req.params[0]--')
     //   var name = utils.stripExtname(req.params[0]);
        var file = path.resolve(dir, 'posts', req.params[0]);

        var html = fs.readFileSync(file).toString()
     //   res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        res.end(html);
    });

    // 渲染列表

    router.get('/', function(req, res, next) {
        var file = path.resolve(dir, 'index.html');
        var html = fs.readFileSync(file).toString(); 

        res.end(html);
    });

    app.listen(port, function() {
        console.log(`listen ${port} ...`)
    });
};

