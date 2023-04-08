const { ipcMain, dialog } = require("electron");

// 注册ping消息的处理函数
ipcMain.handle("ping", () => "pong");

// 注册文件打开
ipcMain.handle("selectFile", async () => {
  const { canceled, filePaths } = await dialog.showOpenDialog();
  if (canceled) {
    return;
  } else {
    console.log("opened file list: ", filePaths);
    return filePaths[0];
  }
});
