import express from 'express'
import path from 'path'
import proxy from 'proxy-middleware'
import webpack from 'webpack'
import config from '../webpack.config.dev'
import { PORT as API_PORT } from './api-server'

const app = express()
const compiler = webpack(config)

const PORT = 3333

app.use(require('webpack-hot-middleware')(compiler))
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
  stats: {
    colors: true
  }
}))

app.use(express.static('public'))
app.use('/api', proxy(`http://localhost:${API_PORT}`))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'))
})

app.listen(PORT, 'localhost', (err) => {
  if (err) {
    console.log(err)
    return
  }

  console.log(`dev-server listening at http://localhost:${PORT}`)
})
