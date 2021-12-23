import App from './App.vue'
import plugin from '../../packages/index' // 引用packages导出的模块进行测试
import { createApp } from 'vue'

const app = createApp(App)
app.use(plugin)
app.mount('#app')
