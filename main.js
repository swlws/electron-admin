console.log(`欢迎来到 Electron 👋`);

const { app, BrowserWindow } = require("electron");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  });

  win.loadFile("index.html");
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