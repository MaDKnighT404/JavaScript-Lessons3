'use strict';

let path = require('path');

module.exports = {
  mode: 'production',
  entry: './js/script.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/js'
  },
  watch: true,

  devtool: "source-map",

  module: { // модули, которые будут прикриплены.
    rules: [ // правила
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/, // какие файлы должны исключить
        use: { // в этом свойстве описываем как и что используем.
          loader: 'babel-loader', // loader - технология, которая будет связывать webpack с babel
          options: { // прописываем опции, которые будут использваться.
            presets: [['@babel/preset-env', { // можно ещё донастроить
                debug: true, // прямо во время компеляции можно увидеть, что происходит
                corejs: 3, // ещё одна библиотека corejs 3 версии. Включает все возможные полифилы
                useBuiltIns: "usage" // позволяет интелектуально выбрать только те полифилы, которые необходимы.
            }]]
          }
        }
      }
    ]
  }
};
