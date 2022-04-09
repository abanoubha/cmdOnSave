# cmdOnSave v0.1.0

WIP pre-alpha stage !

- use in-project `cmdOnSave.json` file to add the command(s) you want to run on save.
- you can run a specific command on save for each file type, or you can run command(s) after saving any file in the current project.

[cmdOnSave](https://github.com/abanoubha/cmdOnSave) is inspired by [emeraldwalk's runOnSave](https://github.com/emeraldwalk/vscode-runonsave).

## Example config file

Config file is stored in the root of the project as `cmdOnSave.json`.

```json
{
    "commands": [
        {
            "match": ".*",
            "isAsync": true,
            "cmd": "npx tailwindcss -i ./src/input.css -o ./public/style.css --minify"
        },
        {
            "match": "\\.html$",
            "cmd": "npx tailwindcss -i ./src/input.css -o ./public/style.css --minify",
            "isAsync": true
        },
        {
            "match": "\\.css$",
            "cmd": "npx tailwindcss -i ./src/input.css -o ./public/style.css --minify"
        }
    ]
}
```

## Tasks

- [x] bare bone extension <https://code.visualstudio.com/api/get-started/your-first-extension>
