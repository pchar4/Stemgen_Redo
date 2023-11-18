console.log("hello world");
const { app, BrowserWindow, ipcMain, Notification } = require('electron');
const path = require('path');
const isDev = !app.isPackaged;

let mainWindow;


function createMainWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 800,
        backgroundColor: 'white',
        webPreferences: {
            nodeIntegration: false,
            worldSafeExecuteJavaScript: true,
            contextIsolation: true,
            preload: path.join(__dirname, 'preload.js')
        }
    });

    mainWindow.loadFile('index.html');

    if (isDev) {
        require('electron-reload')(__dirname, {
            electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
        });
    }

    // Handle app logic after the user is logged in.
    // You can add event listeners or code to switch between windows.
}

app.whenReady().then(() => {
    const window = createMainWindow();

    ipcMain.on('login-success', () => {
        // Handle successful login here.
        loginWindow.close();
        createMainWindow();
    });
});
