简体中文 | [English](./README.en.md)

# vue-package

vue-package 基于`vue3`实现的`vue组件`、`vue插件`打包项目模板，由`rollup`作为打包。

你可以参考 [`vue-auto-logout`](https://github.com/Zeffon/vue-auto-logout/)

## 项目结构

```
├─ .prettierrc           # prettier 格式配置文件
├─ LICENSE               # 开源协议
├─ package.json
├─ README.en.md
├─ README.md
├─ release.sh            # npm发布脚本
├─ rollup.config.ts      # rollup 配置文件
├─ tsconfig.json         # ts配置文件
├─ yarn.lock
│
├─example                # 案例，用于测试src编写的代码
│  ├── index.html
│  ├── webpack.config.js # 编写组件、插件
│  └─src
│    ├── App.vue         # yarn dev渲染的页面
│    ├── main.ts         # 导入src目录的模块
├─public
└─src                    # 编写组件、插件
  ├── index.ts           # 导出所编写组件、插件
  ├── shims-vue.d.ts
```

## 安装

1. 启动`example`

```
$ yarn dev
```

2. 编译`src`中的代码

```
$ yarn build
```

3. 打包`src`中的代码

```
$ yarn start
```

4. 上传至`npm`

```
$ yarn pub
```

## 协议

[MIT](https://opensource.org/licenses/MIT)
