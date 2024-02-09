const vscode = require("vscode");

function activate(context) {
  let disposable = vscode.commands.registerCommand("extension.rtlbp", () => {
    vscode.commands.executeCommand("editor.action.insertSnippet", {
      name: "RTL Boilerplate",
    });
  });

  context.subscriptions.push(disposable);
}

exports.activate = activate;

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
