import { createApp } from "vue"
import SCElement from "squid-element"
import router from "./route"
import App from "./App.vue"
import demoBlock from "./components/demo-block.vue"

// 引入 鱿鱼丝组件库样式
import "@squid-element/theme-chalk/src/index.less"

// 引入 鱿鱼丝组件库依赖的element-plus组件库样式
import "element-plus/lib/theme-chalk/index.css"

const app = createApp(App)

app.use(router)
app.component("DemoBlock", demoBlock)
app.use(SCElement)

app.mount("#app")
export default app