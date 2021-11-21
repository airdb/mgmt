/*
 * @Author: guozhigq
 * @Date: 2021-11-13 08:57:50
 * @LastEditTime: 2021-11-13 12:32:24
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /mp-bbhj/src/app.ts
 */
import { createApp } from 'vue'
import { Icon, SearchBar } from '@nutui/nutui-taro'
import { createUI } from 'taro-ui-vue3'
import { mpAutoUpdate } from  './common/utils.js'
import "@nutui/nutui-taro/dist/style.css";
import './app.less'

const App = createApp({
  onShow(options) {
    console.log(options)
    mpAutoUpdate()
  },
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

const tuv3 = createUI()
App.use(tuv3)

App.use(Icon).use(SearchBar)

export default App
