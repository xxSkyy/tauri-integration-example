## How to integrate Tauri

- [Install rust and tauri prerequisites](https://tauri.app/v1/guides/getting-started/prerequisites/)
- Install Tauri CLI with `npm install --save-dev @tauri-apps/cli`
- For npm to detect Tauri correctly you need to add it to the "scripts" section in your package.json file:

```
  "scripts": {
  ...
  "tauri": "tauri"
  }

```

- Run `npm run tauri init`
- Then run `npm run tauri dev`
