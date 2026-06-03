import { defineConfig } from 'vitepress'
import type { DefaultTheme } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

const sidebar: DefaultTheme.SidebarGroup[] = [
  {
    text: "HTML",
    collapsible: true,
    collapsed: true,
    items: [
      { text: "1. 基础入门", link: "/_posts/HTML/1.基础入门" },
      { text: "2. 文本标签", link: "/_posts/HTML/2.文本标签" },
      { text: "3. 链接与媒体", link: "/_posts/HTML/3.链接与媒体" },
      { text: "4. 结构与表单", link: "/_posts/HTML/4.结构与表单" },
    ],
  },
  {
    text: "CSS",
    collapsible: true,
    collapsed: true,
    items: [
      { text: "1. CSS 是什么", link: "/_posts/CSS/1.css是什么" },
      { text: "2. 链接外部 CSS", link: "/_posts/CSS/2.链接外部css" },
      { text: "3. 元素选择器", link: "/_posts/CSS/3.元素选择器" },
      { text: "4. 类选择器", link: "/_posts/CSS/4.类选择器" },
      { text: "5. ID 选择器", link: "/_posts/CSS/5.ID选择器" },
      { text: "6. 属性选择器", link: "/_posts/CSS/6.属性选择器" },
      { text: "7. 伪类选择器", link: "/_posts/CSS/7.伪类选择器" },
      { text: "8. 子代选择器", link: "/_posts/CSS/8.子代选择器" },
      { text: "9. CSS 字体", link: "/_posts/CSS/9.CSS字体" },
      { text: "10. CSS 颜色", link: "/_posts/CSS/10.CSS颜色" },
      { text: "11. CSS 盒子模型", link: "/_posts/CSS/11.CSS盒子模型" },
      { text: "12. CSS 布局", link: "/_posts/CSS/12.CSS布局" },
      { text: "13. CSS 定位", link: "/_posts/CSS/13.CSS定位" },
      { text: "14. CSS 变形", link: "/_posts/CSS/14.CSS变形" },
      { text: "15. CSS 动画", link: "/_posts/CSS/15.CSS动画" },
    ],
  },
  {
    text: "JavaScript",
    collapsible: true,
    collapsed: true,
    items: [
      {
        text: "1. JavaScript 简介",
        link: "/_posts/JavaScript/1.JavaScript简介",
      },
      {
        text: "2. 变量与数据类型",
        link: "/_posts/JavaScript/2.变量与数据类型",
      },
      { text: "3. 条件与循环", link: "/_posts/JavaScript/3.条件与循环" },
      { text: "4. 字符串", link: "/_posts/JavaScript/4.字符串" },
      { text: "5. 数组操作", link: "/_posts/JavaScript/5.JavaScript数组操作" },
      { text: "6. 对象", link: "/_posts/JavaScript/6.JavaScript对象" },
    ],
  },
  {
    text: "VUE",
    collapsible: true,
    collapsed: true,
    items: [
      {
        text: "01-核心基础",
        collapsed: true,
        items: [
          { text: "1. 环境搭建", link: "/_posts/VUE/01-核心基础/1.环境搭建" },
          {
            text: "2. 理解 Vue 项目",
            link: "/_posts/VUE/01-核心基础/2.理解vue项目",
          },
          {
            text: "3. Vue 代码风格",
            link: "/_posts/VUE/01-核心基础/3.vue代码风格",
          },
          { text: "4. 模板语法", link: "/_posts/VUE/01-核心基础/4.模版语法" },
          { text: "5. 属性绑定", link: "/_posts/VUE/01-核心基础/5.属性绑定" },
          { text: "6. 列表渲染", link: "/_posts/VUE/01-核心基础/6.列表渲染" },
          { text: "7. 条件渲染", link: "/_posts/VUE/01-核心基础/7.条件渲染" },
          { text: "8. 事件处理", link: "/_posts/VUE/01-核心基础/8.事件处理" },
          {
            text: "9. 表单输入绑定",
            link: "/_posts/VUE/01-核心基础/9.表单的输入绑定",
          },
          { text: "10. 计算属性", link: "/_posts/VUE/01-核心基础/10.计算属性" },
          { text: "11. 侦听器", link: "/_posts/VUE/01-核心基础/11.侦听器" },
          { text: "12. 模板引用", link: "/_posts/VUE/01-核心基础/12.模板引用" },
          {
            text: "13. 数据变化侦测",
            link: "/_posts/VUE/01-核心基础/13.数据变化侦测",
          },
          {
            text: "14. 动态样式绑定",
            link: "/_posts/VUE/01-核心基础/14.动态样式绑定",
          },
          { text: "15. 组件基础", link: "/_posts/VUE/01-核心基础/15.组件基础" },
          {
            text: "16. Props 详解",
            link: "/_posts/VUE/01-核心基础/16.Props详解",
          },
        ],
      } as DefaultTheme.SidebarItem,
      {
        text: "02-Vue3 进阶",
        collapsed: true,
        items: [
          {
            text: "1. setup 语法糖",
            link: "/_posts/VUE/02-Vue3进阶/1.setup语法糖",
          },
          {
            text: "2. ref 与 reactive",
            link: "/_posts/VUE/02-Vue3进阶/2.响应式核心ref与reactive",
          },
          {
            text: "3. ref 进阶技巧",
            link: "/_posts/VUE/02-Vue3进阶/3.ref进阶技巧",
          },
        ],
      } as DefaultTheme.SidebarItem,
      {
        text: "附录",
        collapsed: true,
        items: [
          { text: "1. 插件扩展", link: "/_posts/VUE/附录/1.插件扩展" },
          { text: "2. 常见报错", link: "/_posts/VUE/附录/2.常见报错" },
        ],
      } as DefaultTheme.SidebarItem,
    ],
  },
  {
    text: "Python",
    collapsible: true,
    collapsed: true,
    items: [
      { text: "1. pip 更换镜像", link: "/_posts/Python/1.pip更换镜像" },
      { text: "2. 创建虚拟环境", link: "/_posts/Python/2.Python创建虚拟环境" },
    ],
  },
  {
    text: "Git",
    collapsible: true,
    collapsed: true,
    items: [
      { text: "基本语法", link: "/_posts/Git/基本语法" },
      { text: "命令速查", link: "/_posts/Git/命令速查" },
    ],
  },
  {
    text: "Mermaid",
    collapsible: true,
    collapsed: true,
    items: [
      { text: "Mermaid 教程", link: "/_posts/Mermaid/Mermaid" },
      { text: "演示", link: "/_posts/Mermaid/演示" },
    ],
  },
];

export default withMermaid({
  title: "东月的文档站",
  description: "记录我的一些笔记，希望对你们有用",
  outDir: "dist",
  themeConfig: {
    sidebar,
    search: {
      provider: 'local'
    },
  }
})
