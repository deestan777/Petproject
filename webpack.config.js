const path = require('path');

module.exports = {
  entry: './index.html', // Вхідний файл вашого додатку
  output: {
    path: path.resolve(__dirname, 'build'), // Вихідна директорія для збірки
    filename: 'bundle.js' // Назва згенерованого файлу
  },
  module: {
    rules: [
      // Правила для обробки різних типів файлів
      {
        test: /.js$/, // Регулярний вираз для відповідних файлів
        exclude: /node_modules/, // Виключити папку node_modules
        use: 'babel-loader' // Використовувати babel-loader для обробки JavaScript файлів
      },
      {
        test: /.css$/, // Регулярний вираз для відповідних файлів
        use: ['style-loader', 'css-loader'] // Використовувати style-loader та css-loader для обробки CSS файлів
      }
    ]
  },
  plugins: [
    // Плагіни, які ви хочете використовувати
  ]
};
