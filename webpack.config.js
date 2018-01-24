var path = require('path');

var SpritesmithPlugin = require('webpack-spritesmith');

module.exports = {
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, 'test'),
        filename: 'index.js',
    },
    plugins: [
      new SpritesmithPlugin({
        src: {
          cwd: path.resolve(`${__dirname}/src/icons`),
          glob: '*.png', // patern
        },
        target: {
          image: path.resolve(`${__dirname}/spirite/sprite.png`),
          css: [
            path.resolve(`${__dirname}/spirite/sprite.less`),
            path.resolve(`${__dirname}/spirite/sprite.css`),
          ],
        },
        apiOptions: {
          cssImageRef: './sprite.png',
          generateSpriteName: (fullPathToSourceFile) => {
            const { name } = path.parse(fullPathToSourceFile)
            return `app-${name}`
          },
        },
        spritesmithOptions: {
          algorithm: 'top-down',
        },
      }),
    ]
};