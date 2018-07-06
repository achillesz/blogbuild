---
title: Linux 查看端口占用并杀掉 
date:2018-07-02 09:00:00
---

查看端口号占用情况,找到进程号
```text
    netstat -apn | grep 80
```
找到进程号以后，再使用以下命令查看详细信息：
```text
    ps -aux | grep <pid> 
```

杀掉该进程
```text
    kill -9 <pid>
```


<img width="300" src="../../assets/imgs/mubapei.jpg">

<div style="color: red">dfdfdf</div>