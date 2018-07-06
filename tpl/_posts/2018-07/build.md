---
    title: 博客制作过程 
    date:  2018-07-05 21:00:00
---

 安装模块
 
```text
   npm init
   npm install --save `modulename`
```

packjson添加

```js
  "bin": {
    "myblog": "./bin/myblog.js"
  }
```

命令行工具

```text
    myblog -h
    myblog preview <dir> // 实现实时预览功能, dir为博客所在目录,默认为当前目录 
    myblog create <dir> // 创建一个空的博客， dir为博客所在目录,默认为当前目录 
    myblog build <dir> // 生成静态html, dir为博客所在目录,默认为当前目录 
```

myblog 的开始

```js
    #!/usr/bin/env node // 告诉shell 用什么程序去解析
```

> sudo npm link // 建立链接