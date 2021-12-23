import { App } from 'vue'

const plugin = {
  // TODO 编写导出的逻辑
  install(app: App): void {
    app.directive('directive_name')
  }
}

export default plugin
