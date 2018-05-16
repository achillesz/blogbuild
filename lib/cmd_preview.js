var express = require('express');

var serverStatic = require('serve-static');
var path = require('path');
var utils = require('./utils');
var open = require('open');

module.exports = function(dir) {
    dir = dir || ',';
    //初始化express
    var app = express();
    var router = express.Router();
    app.use('/assets', serverStatic(path.resolve(dir, 'assets')));
    app.use(router);

    router.get('/posts/*', function(req,res, next) {
        var name = utils.stripExtname(req.params[0]);
        var file = path.resolve(dir, '_posts', name + '.md');

        var html = utils.renderPost(dir, file);

     //   res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        res.end(html);
    });

    // 渲染列表

    router.get('/', function(req, res, next) {
        var html = utils.renderIndex(dir); 

        res.end(html);
    });

   var config = utils.loadConfig(dir);
   var port = config.port || 3000;
   var url = 'http://127.0.0.1:' + port;
   app.listen(port);

   open(url);

};

