const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 425, // Scrollbar gizlenince içerik daralmasın diye hafif artırabilirsin
    height: 850,
    resizable: false,
    maximizable: false,
    title: "NexaVerse",
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    }
  });

  // Forumu yükle
  win.loadURL('https://forum.nexabag.xyz');

  // SAYFA YÜKLENDİĞİNDE SCROLLBAR'I GİZLE
  win.webContents.on('did-finish-load', () => {
    win.webContents.insertCSS(`
      /* Kaydırma çubuğunun kendisini gizle */
      ::-webkit-scrollbar {
        display: none !important;
      }
      /* Alternatif olarak tüm sayfada kaydırma çubuğunu görünmez yap */
      body {
        scrollbar-width: none; /* Firefox için */
        -ms-overflow-style: none; /* IE ve Edge için */
      }
    `);
  });

  win.setMenuBarVisibility(false);
}

app.whenReady().then(createWindow);