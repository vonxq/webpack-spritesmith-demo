# webpack-spritesmith-demo
1. 使用[webpack-spritesmith](https://github.com/mixtur/webpack-spritesmith)的一个实例  
2. 也可用作雪碧图生成工具  
注: 需node环境

## 使用步骤:  
```
npm install
webpack
```
执行完以上命令即可在spirite文件夹下看到
1. 雪碧图spirite.png
2. 相应css文件spirite.css (class的命名为icon-generateSpriteName生成的名，可自行修改命名配置)
2. 相应less文件spirite.less

## less文件使用示例
index.less：
```less
@import './sprite.less';
// 生成所有的class
.sprites(@spritesheet-sprites);// 文件名为generateSpriteName生成的名
// 生成单个图片的class
.app-icon-1{
  .sprite(@generateSpriteName生成的名);
  .app-icon;
}
```