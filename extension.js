// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	vscode.workspace.onDidSaveTextDocument((document) => {
		// vscode.window.setStatusBarMessage(document.fileName);

		var cfgPath = vscode.workspace.getWorkspaceFolder(document.uri);
		cfgPath = cfgPath ? cfgPath.uri.fsPath : vscode.workspace.workspaceFolders;

		// console.log("file:/" + cfgPath + "/cmdOnSave.json");

		// var cfg = vscode.workspace.findFiles("file:/" + cfgPath + "/cmdOnSave.json")
		// 	.then(result => vscode.workspace.fs.readFile(result[0]));

		// findFiles('**​/*.js', '**​/node_modules/**', 10)
		var cfg = vscode.workspace.findFiles('**/cmdOnSave.json', '**/node_modules/**', 1)
			.then(result => vscode.workspace.fs.readFile(result[0]));

		console.log(cfg);

		vscode.window.setStatusBarMessage(cfgPath);
	});

	// config = vscode.workspace.findFiles('**​/cmdOnSave.json', '**​/node_modules/**', 1)
	// 		.then(result => vscode.workspace.fs.readFile(result[0]));

	// vscode.workspace.fs.readFile(vscode.Uri.parse(context.asAbsolutePath('package.json')))

	// vscode.window.setStatusBarMessage(message);

	// public showOutputMessage(message?: string): void {
	// 	message = message || `Cmd On Save ${this.isEnabled ? 'enabled' : 'disabled'}.`;
	// 	this._outputChannel.appendLine(message);
	// }

	// let disposable = vscode.commands.registerCommand('cmdonsave.helloWorld', function () {
	// 	vscode.window.showInformationMessage('Hello World from cmdOnSave!');
	// });
	// context.subscriptions.push(disposable);

	vscode.commands.registerCommand('extension.abanoubha.enableCmdOnSave', () => {
		// context.globalState.update('isEnabled', true);
		// const msg = `Cmd On Save is ${this.isEnabled ? 'enabled' : 'disabled'}.`;
		vscode.OutputChannel.appendLine("Cmd On Save is enabled");
	});

	vscode.commands.registerCommand('extension.abanoubha.disableCmdOnSave', () => {
		// context.globalState.update('isEnabled', false);
		// const msg = `Cmd On Save is ${this.isEnabled ? 'enabled' : 'disabled'}.`;
		vscode.OutputChannel.appendLine("Cmd On Save is disabled");
	});
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}