#!/usr/bin/env node

var program = require('commander');

// 命令版本号

program.version('0.0.1');

// help

program.command('help').description('显示使用帮助').action(function() {
    program.outputHelp();
});

// create 命令
program.command('create [dir]').description('创建一个空的博客').action(require('../lib/cmd_create'));

// preview 命令
program.command('preview [dir]').description('实时预览').action(function(dir) {
    var a = require('../lib/cmd_preview');
    a(dir);
});

// build 命令
program.command('build [dir]').
description('生成整站静态html').
option('-o, --output <dir>', '生成的静态html存放目录').
action(require('../lib/cmd_build'));

// 开始解析
console.log(process.argv)
program.parse(process.argv); 