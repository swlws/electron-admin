const information = document.getElementById("os");
information.innerText = `本应用正在使用 Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), 和 Electron (v${versions.electron()})`;

const ipcEl = document.getElementById("ipc");
const func = async () => {
  const response = await window.versions.ping();
  ipcEl.innerHTML = `${ipcEl.innerHTML}<br>${response}`;
};

func();
setInterval(func, 1000);
