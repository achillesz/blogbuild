var express = require('express');

var serverStatic = require('serve-static');
var path = require('path');
var utils = require('./utils');
var open = require('open');

module.exports = function(dir) {
    dir = dir || '.';
    //初始化express
    var app = express();
    var router = express.Router();
    var config = utils.loadConfig(dir);
    var port = config.port || 3000;
    console.log(path.resolve(dir, 'assets'), 'static')
    app.use('/assets', serverStatic(path.resolve(dir, 'assets'))); // 不然还需要做对应的静态文件响应
    app.use(router);

    router.get('/posts/*', function(req,res, next) {// 路由 到 控制器
        console.log(req.params,'req.params[0]--')
        var name = utils.stripExtname(req.params[0]);
        var file = path.resolve(dir, '_posts', name + '.md');

        var html = utils.renderPost(dir, file);

        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'}); // 不写也行
        res.end(html);
    });

    // 渲染列表

    router.get('/', function(req, res, next) {
        var html = utils.renderIndex(dir); 

        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        res.end(html);
    });

    app.listen(port, function() {
        console.log(`listen ${port} ...`)
    });
};

