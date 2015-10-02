import restify from 'restify'

const server = restify.createServer({
  name: 'api-server',
  version: '0.1.0'
})

const PORT = 8080

server.use(restify.acceptParser(server.acceptable))
server.use(restify.queryParser())
server.use(restify.bodyParser())

server.listen(PORT, () => {
  console.log(`${server.name} listening at ${server.url}`)
})

server.get('/users', (req, res, next) => {
  res.send([
    {
      name: 'Chris'
    },
    {
      name: 'Katy'
    }
  ])

  return next()
})

server.get('/echo/:name', (req, res, next) => {
  res.send(req.params)
  return next()
})
