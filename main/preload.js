const { contextBridge, ipcRenderer } = require("electron");

// 将操作系统的API暴露给渲染进程（浏览器）
contextBridge.exposeInMainWorld("versions", {
  // 能暴露的不仅仅是函数，我们还可以暴露变量
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  // IPC通信
  // 向渲染进程暴露一个ping接口
  ping: () => ipcRenderer.invoke("ping"),
  selectFile: () => ipcRenderer.invoke("selectFile"),
});
