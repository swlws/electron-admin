console.log(`欢迎来到 Electron 👋`);
const path = require("path");
const { app, BrowserWindow, ipcMain } = require("electron");
require("./main/ipcHandler");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "main/preload.js"),
    },
  });

  // 注册一个
  // ipcMain.handle("ping", () => "pong");

  // 直接加载本地UI
  win.loadFile("index.html");
  // 也可以加载远程地址的网页
  // win.loadURL("https://github.com");

  // 打开浏览器的调试窗口
  // 也可以使用组合键【command + option + i】打开
  // win.webContents.openDevTools();
};

app.whenReady().then(() => {
  createWindow();

  // 如果没有窗口打开则打开一个窗口 (macOS)
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// 在 Windows 和 Linux 上，我们通常希望在关闭一个应用的所有窗口后让它退出
// darwin是macos
app.on("window-all-closed", () => {
  console.log(process.platform);
  if (process.platform !== "darwin") app.quit();
});
