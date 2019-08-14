import Vue from 'vue'
import App from './app.vue'

import './assets/styles/test.css'
import './assets/images/1.jpg'
import './assets/styles/test.stylus.styl'
// import(/* webpackChunkName: "test" */ './assets/js/test');

async function getAsyncComponent() {
    var element = document.createElement('div');

    // 在 import 的括号里 加注释 /* webpackChunkName: "lodash" */ ，为引入的文件取别名
    const { default: _ } = await import(/* webpackChunkName: "test" */ './assets/js/test');

    element.innerHTML = _.join(['Hello!', 'dynamic', 'imports', 'async'], ' ');

    return element;
}
getAsyncComponent()

const root = document.createElement('div')
document.body.appendChild(root)

new Vue({
    render: (h) => h(App)
}).$mount(root)