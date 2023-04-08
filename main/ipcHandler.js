const { ipcMain } = require("electron");

// 注册ping消息的处理函数
ipcMain.handle("ping", () => "pong");
