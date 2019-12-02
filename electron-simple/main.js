const fs = require('fs')
const os = require('os')
const path = require('path')
const { app, BrowserWindow, ipcMain, dialog } = require('electron')

const address = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'http://localhost:5000'

async function createWindow () {
  // Create the browser window.
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      preload: __dirname + '/preload.js'
    }
  })

  // Bug: https://github.com/electron/electron/issues/13008
  // win.webContents.openDevTools()
  
  win.maximize()

  setTimeout(() => win.loadURL(address), 3000) // 🚨 Race condition 😩
  
  ipcMain.on('ahoy', () => console.log('Hello from React!\n'))

  ipcMain.on('oop', (ipcEvent, text) => {
    dialog
      .showSaveDialog(null, {
        filters: [
          { name: 'Text', extensions: ['txt'] },
        ],
        defaultPath: path.join(os.homedir(), 'Desktop', 'ElectronText.txt')
      })
      .then(({ filePath }) => {
        fs.writeFileSync(filePath, text, 'utf-8')
      })
      .catch(err => console.error(err))
  })
}

app.on('ready', createWindow)