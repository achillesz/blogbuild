var express = require('express');

var serverStatic = require('serve-static');
var path = require('path');
var utils = require('./utils');

module.exports = function(dir) {
    dir = dir || '.';
    //初始化express
    var app = express();
    var router = express.Router();
    console.log(path.resolve(dir, 'assets'))
    app.use('/assets', serverStatic(path.resolve(dir, 'assets')));
    app.use(router);

    router.get('/posts/*', function(req,res, next) {
        console.log(req.params,'req.params[0]--')
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

    app.listen(3000, function() {
        console.log('listen 3000...')
    });
};

