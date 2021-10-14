[简体中文](./README.md) | English

# vue-package

vue-package is a packaged project template based on `vue components` and `vue plugins` implemented by `vue3`, packaged by `rollup`.

You can learn from [`vue-auto-logout`](https://github.com/Zeffon/vue-auto-logout/)

## Project

```
├─ .prettierrc           # prettier Format configuration file
├─ LICENSE               # Open source agreement
├─ package.json
├─ README.en.md
├─ README.md
├─ release.sh            # npm Publish script
├─ rollup.config.ts      # rollup configuration file
├─ tsconfig.json         # ts configuration file
├─ yarn.lock
│
├─example                # Case, used to test the code written by src
│  ├── index.html
│  ├── webpack.config.js # webpack configuration file
│  └─src
│    ├── App.vue         # yarn dev - Page rendered at runtime
│    ├── main.ts         # Import modules from the src directory
├─public
└─src                    # Write components, plugins
  ├── index.ts           # Export the written components and plug-ins
  ├── shims-vue.d.ts
```

## Install

1. Start `example`

```
$ yarn dev
```

2. Compile the code in `src`

```
$ yarn build
```

3. Package the code in `src`

```
$ yarn start
```

4. Upload to `npm`

```
$ yarn pub
```

## License

[MIT](https://opensource.org/licenses/MIT)
