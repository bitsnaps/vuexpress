var express = require('express');
// var path = require('path');
// var bodyParser = require('body-parser');

// var webpack = require('webpack');
// const config = require('./webpack.config.js');
// const webpackDevMiddleware = require('webpack-dev-middleware')
// const webpackHotMiddleware = require('webpack-hot-middleware')

var app = express();

// const compiler = webpack(config);

// app.use(webpackDevMiddleware(compiler, {
//   publicPath: config.output.publicPath
// }));

// enable hot-reload and state-preserving
// compilation error display
// app.use(webpackHotMiddleware(compiler));

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

// app.use(bodyParser.json());
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, '/dist')));

app.get('/api', function (req, res){
  res.json({
    message:"hello"
  });
})

// app.listen(process.env.PORT | 3000, function () {
//   console.log('Listening on http://localhost:3000');
// })

module.exports = app;
