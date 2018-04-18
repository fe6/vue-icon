# @fe6/vue-icon 图标
> Vue.js 的 语义化的矢量图形。

## 如何使用

使用 `<Icon />` 标签声明组件，指定图标对应的 type 属性，示例代码如下:
```` vue
<Icon type="loading1" />
````

## 本地部署

图标默认托管在 [iconfont.cn](http://iconfont.cn) ，默认公网可访问。如需本地部署，可参考 [示例](https://github.com/fe6/vue-icon/tree/master/example) 。

## API

由于图标字体本质上还是文字，可以使用 `style` 和 `class` 设置图标的大小和颜色。

```` vue
<Icon type="loading1" :style="{fontSize: '210px'}" />
````

|参数|说明|类型|是否必填|默认值|
|---|----|---|-------|-----|
|type|图标类型。如果为空则不显示|boolean|是|-|
|style|设置图标的样式，例如 fontSize 和 color|object|否|-|
|spin|是否有旋转动画|object|否|false|

## 命令的功能
> 本项目的开发及打包工作流都集成到了 [@fe6/vcmd](https://www.npmjs.com/package/@fe6/vcmd) 中。

### npm start
  - style
    - 语法检测
    - sass 转译 css
  - ts
    - 语法检测
    - ts 转译
  - html
    - 渲染 vue
    - 实时编译

![npm start 例子](https://github.com/fe6/vcmd/raw/master/public/server.gif)

### npm run build
  - style
    - 语法检测
    - sass 转译 css
    - 压缩
    - postcss 低版本兼容
  - js
    - 语法检测
    - ts 转译
    - 打包
    - 语法低版本兼容

![npm run build 例子](https://github.com/fe6/vcmd/raw/master/public/build.gif)

## 开发须知

- 本项目已经配置 Travis (持续集成)， 自动化到其他项目注意修改 `.travis.yml`
- 本项目已经配置 Codecov (单元测试报告上传)， 自动化到其他项目注意修改 `.codecov.yml`
- 本项目已经打开 snyk (漏洞检测)
