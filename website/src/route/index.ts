import { createRouter, createWebHashHistory } from "vue-router"
import routes from "./route.config"

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
})

export default router
