const { app, BrowserWindow, shell } = require("electron");

const HOME = "https://shafiunabbas.hatchable.site/";
const TRUSTED_HOSTS = new Set(["shafiunabbas.hatchable.site"]);

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 850,
    minWidth: 360,
    minHeight: 600,
    title: "BankSaathi",
    autoHideMenuBar: true,
    backgroundColor: "#f2f7f4",
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true
    }
  });

  win.webContents.setWindowOpenHandler(({ url }) => {
    let parsed;
    try { parsed = new URL(url); } catch { return { action: "deny" }; }
    if (parsed.protocol === "https:" && TRUSTED_HOSTS.has(parsed.hostname)) {
      return { action: "allow" };
    }
    if (parsed.protocol === "https:" || parsed.protocol === "http:" || parsed.protocol === "mailto:") {
      shell.openExternal(url);
    }
    return { action: "deny" };
  });

  win.webContents.on("will-navigate", (event, url) => {
    let parsed;
    try { parsed = new URL(url); } catch { event.preventDefault(); return; }
    if (parsed.protocol !== "https:" || !TRUSTED_HOSTS.has(parsed.hostname)) {
      event.preventDefault();
      if (parsed.protocol === "https:" || parsed.protocol === "http:" || parsed.protocol === "mailto:") {
        shell.openExternal(url);
      }
    }
  });

  win.loadURL(HOME);
}

app.whenReady().then(() => {
  createWindow();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
