# Monorepo Component Explorer Style
Monorepo style for the Loopback API Explorer.

## Usage

Configure loopback-component-explorer in component-config.json by setting `uiDirs` as the path to your api-explorer-style installation:

```json
{
  "loopback-component-explorer": {
    "mountPath": "/explorer",
    "uiDirs": [
      "node_modules/@gorn/api-explorer-style"
    ]
  }
}
```
