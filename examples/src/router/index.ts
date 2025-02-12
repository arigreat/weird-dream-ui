import { createMemoryHistory, createRouter } from 'vue-router'

import liveView from '../components/liveView.vue'
import exampleView from '../components/exampleView.vue'

const routes = [
  { path: '/live', component: liveView },
  { path: '/', component: exampleView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router