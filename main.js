const { app, BrowserWindow } = require('electron')

function createWindow () {
  // Create the browser window.
  let win = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true
    }
  })

  // and load the index.html of the app.
  win.maximize()
  win.loadFile('index.html')
}

app.on('ready', createWindow)

