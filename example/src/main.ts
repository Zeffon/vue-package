import App from './App.vue'
import plugin from '../../src/index' // 引用src导出的模块进行测试
import { createApp } from 'vue'

const app = createApp(App)
app.use(plugin)
app.mount('#app')
