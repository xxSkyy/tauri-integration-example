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

- Run
  `npm run tauri init`
- Confirm everything expect url of dev server - change port `8080` to `5173`
- Then run
  `npm run tauri dev`
- To build binary you have to change default identifier in `src-tauri/tauri.conf.json` then run `npm run tauri build`
