# electron-admin

简单 electron 的简单实现，具备的能力：

- 启动一个 electron 窗口
- 预加载脚本，获取主线程的数据
- IPC 通信，主进程与渲染进程之间的通信

# 安装

```bash
# 安装 electron
> npm install electron -D

# 安装打包需要的依赖
> npm install @electron-forge/cli -D
# 转换配置文件
> npx electron-forge import
```

# 运行

```bash
> npm run start
```

# 打包

```bash
> npm run make
```
