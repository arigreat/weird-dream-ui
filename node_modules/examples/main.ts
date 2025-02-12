import {createApp} from 'vue'
import App from './src/app.vue'
import router from './src/router'

// 开发环境
import wd from '../packages/components'

// 打包效果
// import wd from '../packages/weird-dream-ui'

// npm
// import wd from 'weird-dream-ui'

const app = createApp(App)

app.use(wd)
app.use(router)

app.mount('#app')

