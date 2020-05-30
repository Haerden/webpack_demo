# webpack_demo
### 3-3Loader
### 3-4Loader打包静态资源(样式下)
`@import './xx.scss'`
- style-loader
- css-loader
    `options: {
        importLoaders: 2,
        modules: true // 模块化 css
    }`
- scss-loader
- postcss-loader

#### 引入字体图标
(eot|ttf|svg)

#### 对应官网 asset managerment