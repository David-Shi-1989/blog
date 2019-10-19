global.APP_ENV = 'development'
process.env.NODE_ENV = 'development'
process.env.TZ = 'Asia/Shanghai'
const express = require('express')
const path = require('path')
const webpack = require('webpack')
const webpackDevMid = require('webpack-dev-middleware')

const bodyParser = require('body-parser')
const session = require('express-session')
const MemoryStore = require('session-memory-store')(session)
const cookieParser = require('cookie-parser')

const app = express()

const LISTEN_PORT = 8080
const DIST_DIR = path.join(__dirname, '../', 'dist')
const webpackConfig = require('../build/webpack.server.conf.js')
const compiler = webpack(webpackConfig)

app.use('/static', express.static('static'))
app.use(cookieParser())
app.use(session({
  name: 'sww',
  secret: 'shiwangwang',
  store: new MemoryStore(),
  resave: true,
  saveUninitialized: true
}))

app.use(webpackDevMid(compiler, {
  publicPath: webpackConfig.output.publicPath,
  noInfo: true
}))
app.use(require('webpack-hot-middleware')(compiler))

app.use(bodyParser.json({limit: '256mb'}))
app.use(bodyParser.urlencoded({limit: '256mb', extended: true}))

app.get(['/', '/index.html'], function (req, res, next) {
  const filePath = path.join(DIST_DIR, 'index.html')
  compiler.outputFileSystem.readFile(filePath, function (err, result) {
    if (err) {
      return (next(err))
    }
    try {
      res.writeHead(200, {
        'Content-Type': 'text/html;charset=utf-8'
      })
      res.end(result.toString())
    } catch (e) {
      console.error(e)
    }
  })
})

app.listen(LISTEN_PORT, function () {
  console.log(`App run at port ${LISTEN_PORT}`)
})
