#!/usr/bin/env node

var program = require('commander');

// 命令版本号

program.version('0.0.1');

// help

program.command('help').description('显示使用帮助').action(function() {
    program.outputHelp();
});


// create 命令
program.command('create [dir]').description('创建一个空的博客').action(function() {
    console.log('create %s', dir);
});

// preview 命令
program.command('preview [dir]').description('实时预览').action(require('../lib/cmd_preview'));


// build 命令

program.command('build [dir]').description('生成整站静态html').option('-o, --output <dir>', '生成的静态html存放目录').action(function() {
    console.log('preview %s', dir);
}).action(function(dir, options) {
    console.log('create %s, output %s', dir, options.output);
});

// 开始解析

program.parse(process.argv);

