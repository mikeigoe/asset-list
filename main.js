// Importing packages
const electron = require('electron');
const url = require('url');
const path = require('path');

// Pull some required features out of electron
const { app, BrowserWindow, Menu } = electron;

// Declare our main window
let mainWindow;

// Listen for the app to be ready
app.on('ready', function () {
	// Create new window
	mainWindow = new BrowserWindow({});
	// Load HTML into window
	mainWindow.loadURL(url.format({
		// This is basically passing file://dirname/mainWindow.html into loadUrl
		pathname: path.join(__dirname, 'mainWindow.html'), //__dirname is the current directory
		protocol: 'file:',
		slashes: true
	}));

	// Build the menu from template
	const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);

	Menu.setApplicationMenu(mainMenu);
});

// Create main menu template

const mainMenuTemplate = [
	{
		label: 'File',
		submenu:[
			{
				label: 'Add Item'
			},
			{
				label: 'Clear Items'
			},
			{
				label: 'Quit',
				// Hotkey for quit, 'darwin' means we are running on a Mac, else Windows or Linux
				accelerator: process.platform == 'darwin' ? 'Command+Q' : 'Ctrl+Q',
				click(){
					app.quit();
				}
			}
		]
	}
];